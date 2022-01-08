import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { OrdersView } from './views/orders/orders.view';
import { CuponsView } from './views/cupons/cupons.view';
import { AccountView } from './account.view';


@NgModule({
  declarations: [
    OrdersView,
    CuponsView,
    AccountView
  ],
  imports: [
    CommonModule, // habilita el *ngIf *ngFor ngSwitch
    AccountRoutingModule
  ]
})
export class AccountModule { }
