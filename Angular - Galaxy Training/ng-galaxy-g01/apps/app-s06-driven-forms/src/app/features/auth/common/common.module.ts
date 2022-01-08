import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorsModule } from '../../../commons/interceptors/interceptors.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AppInterceptorsModule
  ]
})
export class AuthCommonModule { }
