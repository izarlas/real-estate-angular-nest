import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../../types/interfaces/house';
import { CONSTANTS } from '../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
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
