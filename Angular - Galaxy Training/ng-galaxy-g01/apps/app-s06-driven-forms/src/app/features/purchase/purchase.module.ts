import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { CheckoutView } from './views/checkout/checkout.view';
import { SuccessfulView } from './views/successful/successful.view';


@NgModule({
  declarations: [
    CheckoutView,
    SuccessfulView
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ],
})
export class PurchaseModule { }
