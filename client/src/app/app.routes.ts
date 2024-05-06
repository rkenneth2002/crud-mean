import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/create',
    component: ProductFormComponent,
  },
  {
    path: 'products/:id',
    component: ProductFormComponent,
  },
];
