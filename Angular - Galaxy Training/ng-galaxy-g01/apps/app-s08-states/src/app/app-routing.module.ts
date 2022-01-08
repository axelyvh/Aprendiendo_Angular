import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormView } from './views/product-form/product-form.view';
import { ProductListView } from './views/product-list/product-list.view';

const routes: Routes = [
  {
    path: '',
    component: ProductListView
  },
  {
    path: 'crear',
    component: ProductFormView
  },
  {
    path: 'actualizar/:productId',
    component: ProductFormView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
