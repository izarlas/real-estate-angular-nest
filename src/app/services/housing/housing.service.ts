import { Injectable } from '@angular/core';
import { HousingLocation } from '../../types/interfaces/housingLocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
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

  constructor() {}

  getAllHousingLocation(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation: HousingLocation) => housingLocation.id === id
    );
  }
}
