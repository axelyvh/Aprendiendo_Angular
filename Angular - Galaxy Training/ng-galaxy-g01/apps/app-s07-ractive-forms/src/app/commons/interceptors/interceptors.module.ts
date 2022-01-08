import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigHttpInterceptor } from './config-http.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConfigHttpInterceptor,
      multi: true
    }
  ],
})
export class AppInterceptorsModule { }
