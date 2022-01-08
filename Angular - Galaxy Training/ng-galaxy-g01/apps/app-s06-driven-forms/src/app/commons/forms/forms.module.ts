import { NgModule } from '@angular/core';
import { EmailFormatDirective } from './email-format.directive';
import { EmailExistDirective } from './email-exist.directive';

@NgModule({
  declarations: [
    EmailFormatDirective,
    EmailExistDirective
  ],
  exports: [
    EmailFormatDirective,
    EmailExistDirective
  ]
})
export class AppFormsModule { }
