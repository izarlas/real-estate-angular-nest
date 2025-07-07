import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.scss',
  imports: [RouterModule],
})
export class AppComponent {
  title = 'my-app';
}
