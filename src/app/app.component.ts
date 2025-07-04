import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.png"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <app-home />
    </section>
  </main>`,
  styleUrl: './app.component.scss',
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'my-app';
}
