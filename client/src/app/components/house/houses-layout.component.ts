import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from './location/location.component';
import { House } from '@client/types/interfaces/house';
import { HousingService } from '@client/services/housing/housing.service';

@Component({
  selector: 'houses-layout',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="flex align-center flex-wrap items-end">
      <p class="text-2xl p-4" *ngIf="houses.length === 0">
        There are no houses currently available
      </p>
      <app-housing-location *ngFor="let house of houses" [house]="house">
      </app-housing-location>
    </section>
  `,
})
export class HousesLayoutComponent {
  houses: House[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {}

  ngOnInit() {
    this.housingService
      .findAllHouses()
      .subscribe((houses: House[]) => (this.houses = houses));
  }

  ngOnDestroy() {
    // this.housingService.unsubscribe();
  }
}
