import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSavedGuard } from '../../commons/guards/form-saved.guard';
import { AdminComponent } from './admin.component';
import { BillView } from './views/bill/bill.view';
import { ProductCreateView } from './views/product-create/product-create.view';

const routes: Routes = [
  { path: '', redirectTo: 'boleta', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ProductCreateView
      },
      {
        path: 'boleta',
        component: BillView,
        canDeactivate: [ FormSavedGuard ]
      },
      {
        path: 'boleta/:billId',
        component: BillView
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
