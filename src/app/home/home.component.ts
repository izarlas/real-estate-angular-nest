import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housingLocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'House one',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'House two',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/',
      availableUnits: 2,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'House three',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/',
      availableUnits: 3,
      wifi: false,
      laundry: true,
    },
    {
      id: 3,
      name: 'House four',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];
}
