import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '@client/services/housing/housing.service';
import { House } from '@client/types/interfaces/house';
import { Application } from '../application/application';

@Component({
  selector: 'app-details',
  imports: [CommonModule, Application],
  template: ` <article class="flex">
    <div class="flex flex-col">
      <img class="max-w-2xl max-h-full" [src]="house?.photo" />
      <section class="pt-2 pb-2">
        <h2>{{ house?.name }}</h2>
        <p>{{ house?.city }}, {{ house?.state }}</p>
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{ house?.availableUnits }}</li>
          <li>Does this location have wifi: {{ house?.wifi }}</li>
          <li>Does this location have laundry: {{ house?.laundry }}</li>
        </ul>
      </section>
    </div>
    <app-application></app-application>
  </article>`,
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  house: House | undefined = undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .findHouseById(housingLocationId)
      .subscribe((house: House) => {
        this.house = house;
      });
  }
}
