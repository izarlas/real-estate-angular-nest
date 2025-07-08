import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../../services/housing/housing.service';
import { HousingLocation } from '../../../types/interfaces/housingLocation';
import { Application } from '../application/application';

@Component({
  selector: 'app-details',
  imports: [CommonModule, Application],
  template: ` <article class="flex">
    <div class="flex flex-col">
      <img class="max-w-2xl max-h-full" [src]="housingLocation?.photo" />
      <section class="pt-2 pb-2">
        <h2>{{ housingLocation?.name }}</h2>
        <p>{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
    </div>
    <app-application></app-application>
  </article>`,
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
