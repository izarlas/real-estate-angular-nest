import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-bar',
  imports: [MatInputModule, MatIconModule, MatButtonModule],
  template: `
    <section class="flex flex-none -mb-4">
      <form class="flex">
        <mat-form-field class="example-full-width">
          <input type="text" matInput placeholder="Filter by city" />
        </mat-form-field>
        <button
          class="ml-2 mr-2"
          type="submit"
          mat-fab
          extended
          color="primary"
        >
          <mat-icon>search</mat-icon>
          Search
        </button>
      </form>
    </section>
  `,
  styleUrl: './search-bar.scss',
})
export class SearchBar {}
