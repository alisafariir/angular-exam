import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {
    path: 'Products',
    loadComponent: () => import('./pages/products/products').then((m) => m.ProductsComponent),
    title: 'Products',
  },
];
