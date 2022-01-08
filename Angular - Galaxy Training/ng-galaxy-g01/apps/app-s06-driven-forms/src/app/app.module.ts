import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListView } from './views/product-list/product-list.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigHttpInterceptor } from './commons/interceptors/config-http.interceptor';
import { AppInterceptorsModule } from './commons/interceptors/interceptors.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    ProductDetailView,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppInterceptorsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
