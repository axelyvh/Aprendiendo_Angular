import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeView } from './views/home/home.view';
import { WorkshopsView } from './views/workshops/workshops.view';
import { ContactView } from './views/contact/contact.view';
import { PlatformView } from './views/platform/platform.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { CategoryView } from './views/category/category.view';
import { SignInView } from './views/sign-in/sign-in.view';
import { PortalView } from './views/portal/portal.view';

@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    WorkshopsView,
    ContactView,
    PlatformView,
    NotFoundView,
    CategoryView,
    SignInView,
    PortalView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
