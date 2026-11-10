"""Insurance FAQ AI Engine.
Reuses validated dataset loading, candidate retrieval, and OpenAI execution
from tests/evaluate_faq_api_assistant.py.
"""

from pathlib import Path
import json
import os
import re
from typing import List, Optional, Tuple

import dotenv
from openai import OpenAI

from backend.schemas import AssistantResponse, FaqReference

# Resolve dataset path relative to project root
PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATASET_PATH = PROJECT_ROOT / "input" / "insurance-faq-dataset.json"

# Load environment variables safely
dotenv.load_dotenv(PROJECT_ROOT / ".env", override=False)

MODEL_NAME = "gpt-4.1-mini"
ABSTENTION_MESSAGE = "The FAQ dataset does not provide an answer to that question."

REQUIRED_FIELDS = {"id", "category", "question", "answer"}
ALLOWED_FIELDS = REQUIRED_FIELDS | {"link_text", "url"}

STOP_WORDS = {
    "a", "an", "the", "what", "which", "who", "when", "where", "why", "how",
    "do", "does", "did", "i", "you", "we", "can", "could", "should", "would",
    "is", "are", "was", "were", "for", "to", "of", "in", "on", "my", "this",
    "that", "it", "and", "or", "with", "be", "about", "if", "me", "assistant",
}

SYNONYMS = {
    "contradictory": "conflicting",
    "discrepancy": "conflicting",
    "inconsistent": "conflicting",
    "determine": "decide",
    "complete": "ready",
    "completeness": "ready",
    "client": "customer",
    "names": "details",
    "numbers": "details",
    "find": "search",
    "locate": "search",
    "application": "submission",
    "file": "submission",
    "paste": "enter",
    "look": "check",
}

IMPORTANT_CONSIDERATIONS = {
    "faq-011": "Confirm the applicable checklist with an authorized contact; requirements vary by insurer and submission.",
    "faq-012": "A source access problem or an unchecked source does not establish that a document is missing.",
    "faq-021": "Only an authorized underwriting professional may make an underwriting decision under the insurer’s procedures.",
    "faq-024": "Do not enter real customer, broker, or policy details without explicit organizational authorization.",
}

SYSTEM_PROMPT = """You are an Insurance Submission Intake FAQ Assistant.
Your sole and absolute source of business knowledge is the synthetic FAQ excerpts provided in the context below.

Strict Rules:
1. Answer the user's question using ONLY the facts directly stated in the provided FAQ context.
2. Always cite the supporting FAQ ID(s) (for example, [faq-021]) for each factual statement.
3. If the user question cannot be directly and fully answered from the provided FAQ context, or if it asks for an underwriting decision, quote, premium pricing, coverage binding, live policyholder data, or carrier-specific procedures not in the context, you MUST reply with this exact phrase and nothing else:
"The FAQ dataset does not provide an answer to that question."
4. Never invent insurance rules, policies, required document lists, pricing, or coverage decisions.
5. Do not assume or claim access to external or production databases."""


class FaqEngine:
    def __init__(self, dataset_path: Optional[Path] = None):
        self.dataset_path = dataset_path or DATASET_PATH
        self.entries = self._load_dataset()
        self.entries_by_id = {item["id"]: item for item in self.entries}
        self._client: Optional[OpenAI] = None

    def _get_client(self) -> OpenAI:
        if self._client is None:
            api_key = os.getenv("OPENAI_API_KEY", "").strip()
            if not api_key:
                raise ValueError("OPENAI_API_KEY is not configured in the environment.")
            self._client = OpenAI(api_key=api_key)
        return self._client

    def _load_dataset(self) -> list:
        if not self.dataset_path.exists():
            raise FileNotFoundError(f"Dataset not found at: {self.dataset_path}")
        with open(self.dataset_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return self._validate_faq_entries(data)

    @staticmethod
    def _validate_faq_entries(entries: list) -> list:
        if not isinstance(entries, list):
            raise ValueError("FAQ data must be a JSON array of entry objects.")
        if not entries:
            raise ValueError("FAQ data must contain at least one entry.")

        seen_ids = set()
        for index, entry in enumerate(entries, start=1):
            if not isinstance(entry, dict):
                raise ValueError(f"FAQ entry {index} must be an object.")
            missing = REQUIRED_FIELDS - entry.keys()
            extra = entry.keys() - ALLOWED_FIELDS
            if missing:
                raise ValueError(f"FAQ entry {index} is missing required fields: {sorted(missing)}.")
            if extra:
                raise ValueError(f"FAQ entry {index} has unsupported fields: {sorted(extra)}.")
            for field in REQUIRED_FIELDS:
                value = entry[field]
                if not isinstance(value, str) or not value.strip():
                    raise ValueError(f"FAQ entry {index} field '{field}' must be non-empty text.")
            for field in ("link_text", "url"):
                if field in entry and (not isinstance(entry[field], str) or not entry[field].strip()):
                    raise ValueError(f"FAQ entry {index} optional field '{field}' must be non-empty text when included.")
            if entry["id"] in seen_ids:
                raise ValueError(f"FAQ IDs must be unique; duplicate ID: {entry['id']}.")
            seen_ids.add(entry["id"])
        return entries

    @staticmethod
    def normalize(text: str) -> List[str]:
        words = [word for word in re.findall(r"[a-z0-9]+", text.lower()) if word not in STOP_WORDS]
        return [SYNONYMS.get(w, w) for w in words]

    def entry_similarity(self, user_question: str, entry: dict) -> float:
        user_tokens = set(self.normalize(user_question))
        if not user_tokens:
            return 0.0

        q_tokens = set(self.normalize(entry["question"]))
        full_tokens = set(self.normalize(f"{entry['category']} {entry['question']} {entry['answer']}"))

        q_overlap = len(user_tokens & q_tokens) / len(user_tokens | q_tokens) if (user_tokens | q_tokens) else 0.0
        matching_tokens = user_tokens & full_tokens

        # Require at least 2 distinct content words to match (or title overlap >= 0.25)
        if len(matching_tokens) < 2 and q_overlap < 0.25:
            return 0.0

        content_coverage = len(matching_tokens) / len(user_tokens)
        return max(q_overlap, content_coverage * 0.70)

    def retrieve_faq_candidates(self, user_question: str, minimum_score: float = 0.20, top_k: int = 3) -> Tuple[list, float]:
        scored = [
            (self.entry_similarity(user_question, item), item)
            for item in self.entries
        ]
        scored.sort(key=lambda pair: pair[0], reverse=True)
        best_score, _ = scored[0]

        if best_score < minimum_score:
            return [], best_score

        candidates = [item for score, item in scored if score >= minimum_score][:top_k]
        return candidates, best_score

    def generate_response(self, user_question: str) -> AssistantResponse:
        clean_q = user_question.strip()
        if not clean_q:
            raise ValueError("Please enter a non-empty question.")

        # Check for unauthorized underwriting actions (approval, binding, quote)
        q_lower = clean_q.lower()
        is_binding_request = any(term in q_lower for term in [
            "approve this", "bind coverage", "issue a quote", "bind a risk", "approve policy"
        ])

        # Step 1: Grounded candidate retrieval
        candidates, _ = self.retrieve_faq_candidates(clean_q)

        # Pre-call support gate: abstain immediately if no grounded candidates
        if not candidates:
            return AssistantResponse(
                text=ABSTENTION_MESSAGE,
                source=None,
                importantConsideration=None,
                unsupportedAction=is_binding_request
            )

        # Step 2: Context building
        context_blocks = [
            f"FAQ ID: {item['id']}\nCategory: {item['category']}\nQuestion: {item['question']}\nAnswer: {item['answer']}"
            for item in candidates
        ]
        context_text = "\n\n---\n\n".join(context_blocks)
        user_message = f"Synthetic FAQ Context:\n{context_text}\n\nUser Question: {clean_q}"

        # Step 3: Invoke OpenAI API
        client = self._get_client()
        try:
            response = client.chat.completions.create(
                model=MODEL_NAME,
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": user_message},
                ],
                temperature=0.0,
            )
            answer_text = response.choices[0].message.content.strip()
        except Exception as e:
            # Fall back safely on API error without exposing internal traces or secrets
            return AssistantResponse(
                text="The assistant is currently unable to reach the AI model. Please try again shortly.",
                source=None,
                importantConsideration=None,
                unsupportedAction=False
            )

        # Step 4: Parse citations & map source
        cited_ids = sorted(set(re.findall(r"faq-\d{3}", answer_text)))

        # If model returned the standard abstention message
        if ABSTENTION_MESSAGE in answer_text:
            return AssistantResponse(
                text=ABSTENTION_MESSAGE,
                source=None,
                importantConsideration=None,
                unsupportedAction=is_binding_request
            )

        # Map primary source if a valid cited FAQ exists
        primary_source: Optional[FaqReference] = None
        important_consideration: Optional[str] = None

        if cited_ids and cited_ids[0] in self.entries_by_id:
            top_entry = self.entries_by_id[cited_ids[0]]
            primary_source = FaqReference(
                id=top_entry["id"],
                category=top_entry["category"],
                title=top_entry["question"],
                answer=top_entry["answer"]
            )
            important_consideration = IMPORTANT_CONSIDERATIONS.get(top_entry["id"])
        elif candidates:
            first_candidate = candidates[0]
            primary_source = FaqReference(
                id=first_candidate["id"],
                category=first_candidate["category"],
                title=first_candidate["question"],
                answer=first_candidate["answer"]
            )
            important_consideration = IMPORTANT_CONSIDERATIONS.get(first_candidate["id"])

        # Determine unsupportedAction flag
        unsupported_action = is_binding_request or ("cannot approve" in answer_text.lower() and "bind" in q_lower)

        return AssistantResponse(
            text=answer_text,
            source=primary_source,
            importantConsideration=important_consideration,
            unsupportedAction=unsupported_action
        )
