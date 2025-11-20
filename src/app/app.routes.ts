import {Routes} from '@angular/router';
import {Loginform} from './loginform/loginform';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Loginform, // eagerly loaded
    title: 'Login'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
    canActivate: [authGuard],
    title: 'Dashboard'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
