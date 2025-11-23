import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth.layout').then((a) => a.AuthLayoutComponent),
    loadChildren: () => import('./auth/auth.routes').then((a) => a.authRoutes),
  },
];
