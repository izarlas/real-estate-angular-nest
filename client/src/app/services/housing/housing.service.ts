import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../../types/interfaces/house';
import { CONSTANTS } from '../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // protected housingLocationList: House[] = [
  //   {
  //     id: 0,
  //     name: 'House one',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: '/assets/house0.jpg',
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true,
  //   },
  //   {
  //     id: 1,
  //     name: 'House two',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: '/assets/house1.jpg',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: false,
  //   },
  //   {
  //     id: 2,
  //     name: 'House three',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: '/assets/house2.jpeg',
  //     availableUnits: 3,
  //     wifi: false,
  //     laundry: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'House four',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: '/assets/house3.jpeg',
  //     availableUnits: 1,
  //     wifi: false,
  //     laundry: false,
  //   },
  // ];
  protected houses: House[] = [];

  constructor(private http: HttpClient) {}

  findAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(
      `${CONSTANTS.APIS.BASE_URL}${CONSTANTS.APIS.ENDPOINTS.HOUSE}`,
    );
  }

  findHouseById(id: number): Observable<House> {
    return this.http.get<House>(
      `${CONSTANTS.APIS.BASE_URL}${CONSTANTS.APIS.ENDPOINTS.HOUSE}${id}`,
    );
  }

  submitApplication(firstName?: string, lastName?: string, email?: string) {
    console.log(firstName, lastName, email);
  }
}
