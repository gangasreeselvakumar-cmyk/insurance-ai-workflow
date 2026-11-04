import type { AssistantResponse, FaqReference } from './assistant-response.model';

/**
 * Curated synthetic FAQ excerpts copied from input/insurance-faq-dataset.json.
 * The Angular app configuration does not enable JSON imports, and its app
 * TypeScript project is scoped to frontend/src, so this typed module avoids
 * changing compiler configuration or reaching outside the Angular source tree.
 * Keep IDs, categories, titles, and answers aligned with the source JSON.
 */
interface FaqDemoEntry extends FaqReference {
  readonly prompts: readonly FaqDemoPrompt[];
  readonly importantConsideration?: string;
}

interface FaqDemoPrompt {
  readonly text: string;
  readonly unsupportedAction?: boolean;
}

export const FAQ_DEMO_ENTRIES: readonly FaqDemoEntry[] = [
  {
    id: 'faq-011',
    category: 'Required documents and missing information',
    title: 'Which documents are required for a submission?',
    answer: 'Requirements vary by insurer, product, line of business, and submission circumstances. Check the insurer’s current checklist or procedures. The assistant should not invent a required-document list.',
    prompts: [{ text: 'What documents are required for submission intake?' }],
    importantConsideration: 'Confirm the applicable checklist with an authorized contact; requirements vary by insurer and submission.',
  },
  {
    id: 'faq-012',
    category: 'Required documents and missing information',
    title: 'How can I tell whether a document is missing?',
    answer: 'Check the applicable insurer-approved checklist and the sources you are authorized to review. If a source was not available or could not be checked, say that the document was not found in the checked sources rather than declaring it missing.',
    prompts: [{ text: 'How do I identify missing information?' }],
    importantConsideration: 'A source access problem or an unchecked source does not establish that a document is missing.',
  },
  {
    id: 'faq-021',
    category: 'Underwriter review and escalation',
    title: 'Who makes the underwriting decision?',
    answer: 'An authorized underwriting professional makes underwriting decisions under the insurer’s procedures and authority. The assistant can organize or summarize information but must not approve, decline, price, or bind a risk.',
    prompts: [
      { text: 'Who makes underwriting decisions?' },
      {
        text: 'Can you approve this commercial property policy and bind coverage right now?',
        unsupportedAction: true,
      },
    ],
    importantConsideration: 'Only an authorized underwriting professional may make an underwriting decision under the insurer’s procedures.',
  },
];

const SAFE_ABSTENTION = 'The FAQ dataset does not provide an answer to that question.';

/** Exact-match lookup after case and punctuation normalization; no fuzzy generation. */
export function getFaqDemoResponse(question: string): AssistantResponse {
  const normalizedQuestion = normalize(question);
  const match = FAQ_DEMO_ENTRIES.flatMap((entry) =>
    entry.prompts.map((prompt) => ({ entry, prompt })),
  ).find(({ prompt }) => normalize(prompt.text) === normalizedQuestion);

  if (!match) return { text: SAFE_ABSTENTION };
  const { entry, prompt } = match;

  const source: FaqReference = {
    id: entry.id,
    category: entry.category,
    title: entry.title,
    answer: entry.answer,
  };

  return {
    text: entry.answer,
    source,
    importantConsideration: entry.importantConsideration,
    unsupportedAction: prompt.unsupportedAction,
  };
}

function normalize(value: string): string {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}
