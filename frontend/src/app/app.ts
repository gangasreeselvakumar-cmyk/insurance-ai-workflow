import { Component, signal } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar';
import { AssistantWelcomeComponent } from './features/assistant/assistant-welcome/assistant-welcome';

@Component({
  imports: [AppHeaderComponent, AppSidebarComponent, AssistantWelcomeComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
