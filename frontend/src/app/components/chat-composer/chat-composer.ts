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
  @Input() disabled = false;
  @Output() draftChange = new EventEmitter<string>();
  @Output() submitQuestion = new EventEmitter<string>();

  protected updateDraft(event: Event): void {
    if (this.disabled) return;
    this.draftChange.emit((event.target as HTMLTextAreaElement).value);
  }

  protected submitDraft(): void {
    if (this.disabled) return;
    const question = this.draft.trim();
    if (question) this.submitQuestion.emit(question);
  }

  protected handleEnter(event: Event): void {
    if (this.disabled) return;
    if ((event as KeyboardEvent).shiftKey) return;
    event.preventDefault();
    this.submitDraft();
  }
}
