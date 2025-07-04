import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housingLocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section>
      <img
        class="listing-photon"
        [src]="[housingLocation.photo]"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
