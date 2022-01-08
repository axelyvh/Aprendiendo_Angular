import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelView } from './views/excel/excel.view';
import { PdfView } from './views/pdf/pdf.view';

const routes: Routes = [
  { path: '', redirectTo: 'excel', pathMatch: 'full' },
  { path: 'pdf', component: PdfView },
  { path: 'excel', component: ExcelView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
