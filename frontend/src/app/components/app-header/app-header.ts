import { Component, EventEmitter, Output } from '@angular/core';
import { UiIconComponent } from '../../shared/ui-icon/ui-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  protected toggleMenu(): void {
    this.menuToggle.emit();
  }
}
