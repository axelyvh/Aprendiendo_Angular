import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { IconPathPipe } from './pipes/icon-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    IconPathPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
