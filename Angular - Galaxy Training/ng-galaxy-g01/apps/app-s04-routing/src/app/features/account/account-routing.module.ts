import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountView } from './account.view';
import { CuponsView } from './views/cupons/cupons.view';
import { OrdersView } from './views/orders/orders.view';

const routes: Routes = [
  { path: '', redirectTo: 'pedidos' },
  {
    path: '',
    component: AccountView,
    children: [
      { path: 'pedidos', component: OrdersView },
      { path: 'cupones', component: CuponsView },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
