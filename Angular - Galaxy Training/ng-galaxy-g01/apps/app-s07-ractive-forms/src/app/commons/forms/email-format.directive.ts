import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Directive({
  selector: '[appEmailFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailFormatDirective,
      multi: true
    }
  ]
})
export class EmailFormatDirective implements Validator {

  validate(control: FormControl): ValidationErrors {
    return CustomValidators.emailFormat(control);
  }

}
