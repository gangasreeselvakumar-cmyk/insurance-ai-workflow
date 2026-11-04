import { Component, Input } from '@angular/core';

export type IconName =
  | 'shield-check'
  | 'grid'
  | 'sparkles'
  | 'file-text'
  | 'check-square'
  | 'settings'
  | 'menu'
  | 'search'
  | 'bell'
  | 'user'
  | 'arrow-up'
  | 'paperclip'
  | 'lock'
  | 'message'
  | 'chevron-down'
  | 'help'
  | 'copy'
  | 'thumbs-up'
  | 'thumbs-down';

@Component({
  selector: 'ui-icon',
  standalone: true,
  templateUrl: './ui-icon.html',
  styleUrl: './ui-icon.scss',
})
export class UiIconComponent {
  @Input() name: IconName = 'sparkles';
  @Input() size = 20;
}
