export interface FaqReference {
  id: string;
  category: string;
  title: string;
  answer: string;
}

export interface AssistantResponse {
  text: string;
  source?: FaqReference;
  importantConsideration?: string;
  unsupportedAction?: boolean;
}
