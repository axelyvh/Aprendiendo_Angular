import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlxComponentsModule } from '@galaxy/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlxComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
