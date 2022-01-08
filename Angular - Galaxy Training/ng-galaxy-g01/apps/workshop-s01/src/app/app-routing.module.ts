import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoView } from './views/todo/todo.view';

const routes: Routes = [
  { path: '', component: TodoView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
