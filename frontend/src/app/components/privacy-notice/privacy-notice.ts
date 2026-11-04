import { Component } from '@angular/core';
import { UiIconComponent } from '../../shared/ui-icon/ui-icon';

@Component({
  selector: 'app-privacy-notice',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './privacy-notice.html',
  styleUrl: './privacy-notice.scss',
})
export class PrivacyNoticeComponent {}
