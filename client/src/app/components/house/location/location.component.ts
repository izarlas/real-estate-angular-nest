import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { House } from '@client/types/interfaces/house';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule, MatButtonModule],
  template: `
    <section class="flex flex-col justify-start p-2 w-[25rem] h-[25rem]">
      <img
        class="h-[15rem]"
        [src]="[house.photo]"
        alt="Exterior photo of {{ house.name }}"
      />
      <h2>Name: {{ house.name }}</h2>
      <p>City: {{ house.city }}, State: {{ house.state }}</p>
      <button
        type="button"
        mat-fab
        extended
        color="primary"
        class="mt-4 self-start px-6"
      >
        <a
          [routerLink]="['/details', house.id]"
          class="no-underline text-inherit"
        >
          Learn More
        </a>
      </button>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() house: Partial<House> = {};
}
