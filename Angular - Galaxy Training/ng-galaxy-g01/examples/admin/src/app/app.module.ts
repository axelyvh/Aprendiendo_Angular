import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlxComponentsModule } from '@galaxy/components';
import { GlxIconModule } from '@galaxy/components/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlxComponentsModule,
    GlxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
