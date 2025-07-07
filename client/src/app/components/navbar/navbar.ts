import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [SearchBar, MatButtonModule],
  template: `
    <section class="flex flex-row items-center justify-between w-full">
      <div class="flex flex-row items-center">
        <img
          class="w-full max-w-1/30"
          src="/assets/logo.png"
          alt="logo"
          aria-hidden="true"
        />
        <button
          class="ml-2 mr-2"
          type="button"
          matButton="outlined"
          color="primary"
        >
          Home
        </button>
      </div>

      <app-search-bar></app-search-bar>
    </section>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {}
