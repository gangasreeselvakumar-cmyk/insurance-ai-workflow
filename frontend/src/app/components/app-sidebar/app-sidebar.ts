import { Component, EventEmitter, Output } from '@angular/core';
import { IconName, UiIconComponent } from '../../shared/ui-icon/ui-icon';

interface NavigationItem {
  label: string;
  icon: IconName;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
})
export class AppSidebarComponent {
  @Output() closeMenu = new EventEmitter<void>();

  protected readonly items: NavigationItem[] = [
    { label: 'Dashboard', icon: 'grid' },
    { label: 'AI Assistant', icon: 'sparkles', active: true },
    { label: 'Submissions', icon: 'file-text' },
    { label: 'Tasks', icon: 'check-square' },
    { label: 'Settings', icon: 'settings' },
  ];

  protected closeOnSmallScreen(): void {
    this.closeMenu.emit();
  }
}
