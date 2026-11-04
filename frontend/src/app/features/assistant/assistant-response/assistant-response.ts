import { Component, Input } from '@angular/core';
import { AssistantResponse as AssistantResponseModel } from '../assistant-response.model';
import { UiIconComponent } from '../../../shared/ui-icon/ui-icon';

@Component({
  selector: 'app-assistant-response',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './assistant-response.html',
  styleUrl: './assistant-response.scss',
})
export class AssistantResponseComponent {
  @Input({ required: true }) response!: AssistantResponseModel;

  protected sourceOpen = false;
  protected feedback: 'helpful' | 'not-helpful' | null = null;
  protected copyStatus = '';

  protected async copyResponse(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.response.text);
      this.copyStatus = 'Response copied';
    } catch {
      this.copyStatus = 'Copy is unavailable in this browser';
    }
  }

  protected setFeedback(value: 'helpful' | 'not-helpful'): void {
    this.feedback = this.feedback === value ? null : value;
  }

  protected toggleSource(): void {
    this.sourceOpen = !this.sourceOpen;
  }
}
