import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <section class="flex border border-black-300">
      <img
        class="w-full max-w-1/40"
        src="/assets/logo.png"
        alt="logo"
        aria-hidden="true"
      />
    </section>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {}
