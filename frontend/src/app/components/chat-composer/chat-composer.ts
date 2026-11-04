import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIconComponent } from '../../shared/ui-icon/ui-icon';

@Component({
  selector: 'app-chat-composer',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './chat-composer.html',
  styleUrl: './chat-composer.scss',
})
export class ChatComposerComponent {
  @Input() draft = '';
  @Output() draftChange = new EventEmitter<string>();
  @Output() submitQuestion = new EventEmitter<string>();

  protected updateDraft(event: Event): void {
    this.draftChange.emit((event.target as HTMLTextAreaElement).value);
  }

  protected submitDraft(): void {
    const question = this.draft.trim();
    if (question) this.submitQuestion.emit(question);
  }

  protected handleEnter(event: Event): void {
    if ((event as KeyboardEvent).shiftKey) return;
    event.preventDefault();
    this.submitDraft();
  }
}
