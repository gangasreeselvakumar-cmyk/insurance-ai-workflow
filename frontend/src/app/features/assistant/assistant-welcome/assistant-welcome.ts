import { Component, inject, signal } from '@angular/core';
import { ChatComposerComponent } from '../../../components/chat-composer/chat-composer';
import { PrivacyNoticeComponent } from '../../../components/privacy-notice/privacy-notice';
import { IconName, UiIconComponent } from '../../../shared/ui-icon/ui-icon';
import { AssistantResponseComponent } from '../assistant-response/assistant-response';
import type { AssistantResponse } from '../assistant-response.model';
import { AssistantChatService } from '../assistant-chat.service';

interface SuggestedQuestion {
  text: string;
  detail: string;
  icon: IconName;
}

interface ConversationTurn {
  question: string;
  response: AssistantResponse;
}

@Component({
  selector: 'app-assistant-welcome',
  standalone: true,
  imports: [AssistantResponseComponent, ChatComposerComponent, PrivacyNoticeComponent, UiIconComponent],
  templateUrl: './assistant-welcome.html',
  styleUrl: './assistant-welcome.scss',
})
export class AssistantWelcomeComponent {
  private readonly chatService = inject(AssistantChatService);

  protected readonly draft = signal('');
  protected readonly conversation = signal(false);
  protected readonly loading = signal(false);
  protected readonly pendingQuestion = signal<string | null>(null);
  protected readonly turns = signal<ConversationTurn[]>([]);

  protected readonly suggestions: SuggestedQuestion[] = [
    {
      text: 'What documents are required for submission intake?',
      detail: 'Check why requirements depend on your insurer',
      icon: 'file-text',
    },
    {
      text: 'How do I identify missing information?',
      detail: 'Distinguish a missing item from one not found',
      icon: 'search',
    },
    {
      text: 'Can you approve this commercial property policy and bind coverage right now?',
      detail: 'See how the assistant handles an underwriting action',
      icon: 'shield-check',
    },
    {
      text: 'Who makes underwriting decisions?',
      detail: 'Understand where human authority sits',
      icon: 'shield-check',
    },
  ];

  protected selectQuestion(question: string): void {
    if (this.loading()) return;
    this.ask(question);
  }

  protected ask(question: string): void {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || this.loading()) return;

    this.loading.set(true);
    this.pendingQuestion.set(cleanQuestion);
    this.draft.set('');
    this.conversation.set(true);

    this.chatService.askQuestion(cleanQuestion).subscribe({
      next: (response) => {
        this.turns.update((turns) => [
          ...turns,
          {
            question: cleanQuestion,
            response,
          },
        ]);
        this.pendingQuestion.set(null);
        this.loading.set(false);
      },
      error: () => {
        this.turns.update((turns) => [
          ...turns,
          {
            question: cleanQuestion,
            response: {
              text: 'Unable to communicate with the assistant. Please try again shortly.',
              unsupportedAction: false,
            },
          },
        ]);
        this.pendingQuestion.set(null);
        this.loading.set(false);
      },
    });
  }

  protected clearConversation(): void {
    this.conversation.set(false);
    this.turns.set([]);
    this.pendingQuestion.set(null);
    this.loading.set(false);
    this.draft.set('');
  }
}
