import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    RadioGroupComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RadioGroupComponent,
    InputComponent
  ]
})
export class AppComponentsModule { }
