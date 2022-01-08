import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoView } from './views/todo/todo.view';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
