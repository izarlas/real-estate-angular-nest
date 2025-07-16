import { Routes } from '@angular/router';
import { DetailsComponent } from './components/house/details/details.component';
import { HouseComponent } from './components/house/house.component';

export const routes: Routes = [
  {
    path: '',
    component: HouseComponent,
    title: 'House',
  },
  { path: 'details/:id', component: DetailsComponent, title: 'Details Page' },
];
