import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListView } from './views/product-list/product-list.view';
import { ProductDetailView } from './views/product-detail/product-detail.view';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigHttpInterceptor } from './commons/interceptors/config-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductListView,
    ProductDetailView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConfigHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
