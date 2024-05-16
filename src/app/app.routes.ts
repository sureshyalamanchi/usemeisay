import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home'

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];
