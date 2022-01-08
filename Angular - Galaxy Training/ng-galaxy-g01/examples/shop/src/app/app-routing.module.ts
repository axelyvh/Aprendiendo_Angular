import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { ShoppingCardView } from './views/shopping-card/shopping-card.view';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'carrito', component: ShoppingCardView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
