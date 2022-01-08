import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponentsModule } from '../../commons/components/components.module';
import { BillView } from './views/bill/bill.view';


@NgModule({
  declarations: [
    AdminComponent,
    ProductCreateView,
    BillView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AppComponentsModule,
  ]
})
export class AdminModule { }
