import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivosComponent } from './pages/reactivos/reactivos.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'reactivos', component: ReactivosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
