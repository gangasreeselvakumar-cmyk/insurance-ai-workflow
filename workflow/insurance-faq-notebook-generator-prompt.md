# Insurance FAQ Assistant Notebook Generator Prompt

## Reference availability

The complete class FAQ Assistant Notebook Generator prompt was not found in the local project or nearby searchable Markdown/text reference materials. This is a new, project-specific prompt based on the requirements below; it does **not** claim to reproduce the full class template.

The prompt was prepared after inspecting the complete `input/insurance-faq-dataset.json` and `chat_llm.ipynb`. The existing `chat_llm.ipynb` is an insurance intake learning prototype with synthetic examples, a provider-compatibility placeholder, secrets loaded from environment variables, and network calls disabled by default. It is context for safe notebook conventions only; it is not an FAQ knowledge source and must not be overwritten.

---

## Copyable prompt

You are creating a beginner-friendly FAQ Assistant notebook for the insurance product described below. Follow every instruction in this prompt. Inspect the existing project before writing. Generate the notebook only; do not change the FAQ dataset or other project files.

### Project configuration

- **Industry:** Insurance
- **Product name:** Insurance Submission Intake Assistant
- **FAQ dataset filename:** `insurance-faq-dataset.json`
- **FAQ dataset path:** `input/insurance-faq-dataset.json`
- **Generated notebook filename:** `insurance_faq_assistant.ipynb`
- **Output location:** `outputs/`
- **Required notebook path:** `outputs/insurance_faq_assistant.ipynb`
- **Existing notebook to preserve:** `chat_llm.ipynb`

### Source and scope rules

1. Read the **entire** `input/insurance-faq-dataset.json` before generating notebook content. Do not rely on a partial preview, a summary, another artifact, or model memory.
2. Treat that JSON file as the **sole business knowledge source** for FAQ answers. Do not use the BRD, phase outputs, `chat_llm.ipynb`, external websites, or general model knowledge to add or alter insurance business facts.
3. You may use project files such as `chat_llm.ipynb` only to understand safe notebook conventions, such as beginner-friendly explanations and not exposing credentials. Do not copy its synthetic scenario as FAQ business knowledge.
4. Do not invent insurance rules, insurer/company policies, document requirements, timelines, coverage interpretations, coverage decisions, legal requirements, integrations, or live submission information. If the dataset does not answer a question, say so and direct the user to an appropriate authorized person or the insurer’s actual procedures.
5. Do not infer that a source, system, checklist, or live submission-data connection exists. Do not invent URLs or references.
6. Keep the assistant informational. It must not approve, decline, price, bind, or make any other underwriting decision.

### Validate the source JSON before generation

Validate the complete dataset before creating the notebook. Confirm:

- The file exists, is readable, and parses as valid JSON.
- The top-level value is the expected collection of FAQ entry objects.
- Every entry has non-empty `id`, `category`, `question`, and `answer` string values.
- IDs are unique and stable.
- Optional `link_text` and `url` appear only where already supplied and valid; never invent or “repair” a reference by guessing.
- The dataset covers the intended FAQ categories if those categories are present in the source.

If the file is missing, unreadable, malformed, or materially invalid, stop. Explain the exact issue and path; do not generate a partial notebook or substitute knowledge from other sources. Do not modify the source JSON.

### Self-contained notebook and source fidelity

1. Embed the **same complete valid JSON dataset** inside the notebook so that the notebook does not need to read `input/insurance-faq-dataset.json` at runtime.
2. Preserve every entry, ID, category, question, answer, and optional field exactly. Do not summarize, paraphrase, reorder, omit, add, or normalize dataset content. Embedding may use a JSON string parsed in a notebook code cell or another representation that can be verified losslessly.
3. At generation time, verify that the embedded data parses and is structurally identical to the source dataset (including entry order and optional fields). Include a notebook cell that validates the embedded data before use.
4. Do not place the whole dataset in visible cell output if doing so would create unnecessary notebook output; keep it in a code cell and show a compact validation result instead.

### Notebook content and beginner experience

Create a readable Jupyter notebook with beginner-friendly Markdown explanations before the major code sections. Use small, runnable code cells and explain what the user should see. Include:

1. A title and purpose for the Insurance Submission Intake Assistant FAQ prototype.
2. A clear scope and safety note: answers are limited to the embedded FAQ data; the notebook is not connected to production systems or live submission data; and it does not make underwriting decisions.
3. Setup instructions for selecting a Python kernel in the project’s notebook editor and installing only the dependencies actually used. Prefer Python’s standard library for offline FAQ matching when practical.
4. The embedded JSON and a reusable validation function.
5. A simple, understandable offline matching function that validates a non-empty user question and compares it with FAQ questions. It may use standard-library matching such as `difflib`; explain that this is keyword/string similarity, not semantic understanding.
6. Safe answer behavior. When no sufficiently suitable FAQ entry is found, state that the FAQ dataset does not provide an answer. Do not complete the answer from outside knowledge. If matching is ambiguous, show a short list of possible FAQ questions and ask the user to clarify rather than selecting or combining unsupported answers.
7. A simple interactive question flow that presents the selected FAQ answer as written in the dataset. Keep any references limited to fields already present in that dataset.
8. The tests listed below, runnable in the notebook without connecting to an external service.
9. A separate explanation of the offline FAQ mode and the optional actual-LLM mode. They must never be conflated.

### Offline FAQ matching versus an actual LLM API call

- Make offline FAQ matching the default and ensure it works without credentials or network access.
- Explain clearly that offline matching compares a question against FAQ text and returns an existing FAQ answer; it is **not** an LLM call and does not generate new business knowledge.
- If an actual LLM API option is included, make it a separate, clearly labeled, optional mode. It must be disabled by default and must not be required to run the offline notebook.
- Do not choose or claim a provider unless the project has explicitly confirmed one. If none is confirmed, leave provider, model, endpoint, and compatible API format as explicit placeholders; do not claim the API example works or that a connection is configured.
- Never hardcode, print, display, or expose API credentials. If an API example is provided, read the secret only from an environment variable or a local `.env` file that is not committed. Keep credentials out of notebook outputs and browser-side code. Do not create a real `.env` file or invent credentials.
- An LLM, if later configured, may use only the embedded FAQ dataset as business context. If the question is outside that context, instruct it to abstain and direct the user to the appropriate insurer contact/procedure. Do not let an API response override the source answers or fabricate a policy.
- Explain that sending even FAQ text or a question to an external provider requires applicable project approval. Never send real customer, broker, policy, or submission information in this prototype.

### Required notebook tests

Include a test section with clearly labeled, runnable checks for all of the following:

1. **Valid question:** a question matching an existing FAQ returns the corresponding dataset answer and does not alter its wording.
2. **Unknown question:** an unsupported insurance question produces a safe “not covered by this FAQ dataset” response or a clarification request, with no invented rule, company policy, coverage decision, or live status.
3. **Empty input:** an empty or whitespace-only question is rejected with a clear prompt to enter a question; no matching/API operation is attempted.
4. **Malformed FAQ data:** invalid JSON and invalid structures (including missing required fields, blank required values, or duplicate IDs) are rejected with a clear validation error before matching.

The tests must use local notebook functions and fixtures; they must not alter `input/insurance-faq-dataset.json`, rely on network access, or imply that tests have passed unless actually run. If you create the notebook but do not execute its cells, say so plainly.

### Preserve existing project files and output safely

1. Inspect whether `outputs/` exists and whether `outputs/insurance_faq_assistant.ipynb` already exists before writing.
2. Create the `outputs/` directory if it is absent. Write only `outputs/insurance_faq_assistant.ipynb`.
3. Never overwrite or modify `chat_llm.ipynb`, the FAQ dataset, the BRD, approved phase artifacts, review records, skills, agents, workflows, or unrelated files.
4. If `outputs/insurance_faq_assistant.ipynb` already exists, preserve it. Do not overwrite it silently; report the conflict and request a separate, explicit instruction or use another path only if authorized.
5. Do not create an Angular application, integration, production configuration, `.env` file, credentials, or other deliverables as part of this request.

### Final verification and report

Before reporting completion, check that:

- The notebook is valid `.ipynb` JSON with runnable code-cell syntax and beginner-friendly Markdown cells.
- The full embedded FAQ JSON is structurally identical to the source dataset.
- Offline matching is the default and safe unknown/empty/malformed-data behavior is present.
- The four required test cases are included.
- No business facts, URLs, credentials, integrations, or live-data claims were invented.
- `chat_llm.ipynb` and all other existing project files remain unchanged.

Report the exact output path, source validation result, whether notebook cells/tests were actually executed, and any unresolved provider or project prerequisites. Never report unexecuted tests as passing.

---

## Reference materials inspected for this prompt

- `input/insurance-faq-dataset.json` — full 25-entry dataset; six requested FAQ categories; no optional links or URLs were present.
- `chat_llm.ipynb` — existing synthetic-data LLM learning prototype; it uses environment-variable configuration, keeps network calls disabled by default, and states that the provider is unconfirmed.
- Local search for the complete class notebook-generator prompt — no matching prompt or class template was found in the project or nearby searchable Markdown/text materials.

