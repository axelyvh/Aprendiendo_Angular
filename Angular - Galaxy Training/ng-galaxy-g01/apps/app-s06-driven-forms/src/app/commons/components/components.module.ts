import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RadioGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RadioGroupComponent
  ]
})
export class AppComponentsModule { }
