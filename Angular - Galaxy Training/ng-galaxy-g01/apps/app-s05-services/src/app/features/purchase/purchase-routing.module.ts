import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from '../../commons/guards/is-auth.guard';
import { CheckoutView } from './views/checkout/checkout.view';
import { SuccessfulView } from './views/successful/successful.view';

const routes: Routes = [
  { path: '', component: CheckoutView },
  {
    path: 'compra-exitosa',
    component: SuccessfulView,
    canActivate: [IsAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
