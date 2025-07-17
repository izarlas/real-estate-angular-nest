import { Routes } from '@angular/router';
import { DetailsComponent } from './components/house/details/details.component';
import { HousesLayoutComponent } from './components/house/houses-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HousesLayoutComponent,
    title: 'Browse homes',
  },
  { path: 'details/:id', component: DetailsComponent, title: 'Details Page' },
];
