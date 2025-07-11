import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../../../types/interfaces/housingLocation';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule, MatButtonModule],
  template: `
    <section class="flex flex-col justify-start p-2 w-[25rem] h-[25rem]">
      <img
        class="h-[15rem]"
        [src]="[housingLocation.photo]"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2>Name: {{ housingLocation.name }}</h2>
      <p>
        City: {{ housingLocation.city }}, State: {{ housingLocation.state }}
      </p>
      <button
        type="button"
        mat-fab
        extended
        color="primary"
        class="mt-4 self-start px-6"
      >
        <a
          [routerLink]="['/details', housingLocation.id]"
          class="no-underline text-inherit"
        >
          Learn More
        </a>
      </button>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
