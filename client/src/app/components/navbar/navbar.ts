import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [SearchBar, RouterModule, MatButtonModule],
  template: `
    <section class="flex flex-row items-center justify-between w-full m-2">
      <div class="flex flex-row items-center">
        <img
          class="w-[3rem]"
          src="/assets/logo.png"
          alt="logo"
          aria-hidden="true"
        />
        <button
          class="ml-2 mr-2"
          type="button"
          mat-fab
          extended
          color="primary"
        >
          <a [routerLink]="['/']" class="no-underline text-inherit"> Home </a>
        </button>
      </div>

      <app-search-bar class="flex"></app-search-bar>
    </section>
  `,
})
export class Navbar {}
