import { NgModule } from '@angular/core';
import { EmailFormatDirective } from './email-format.directive';
import { EmailExistDirective } from './email-exist.directive';
import { AsyncValidatorsService } from './async-validators.service';

@NgModule({
  declarations: [
    EmailFormatDirective,
    EmailExistDirective
  ],
  exports: [
    EmailFormatDirective,
    EmailExistDirective
  ],
  // providers: [AsyncValidatorsService]
})
export class AppFormsModule { }
