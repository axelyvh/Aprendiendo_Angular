import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

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
 
  validate(control: AbstractControl): ValidationErrors {
    const value = control.value || '';
    const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

    const isValid = regexp.test(value);

    return isValid ? null : { emailFormat: 'El email debe tener el formato user@domain.ext' }
  }

}
