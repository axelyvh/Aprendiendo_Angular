import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounce, debounceTime, map, tap } from 'rxjs/operators';
import { UsersHttpService } from '../services/users-http.service';
import { AsyncValidatorsService } from './async-validators.service';

@Directive({
  selector: '[appEmailExist]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailExistDirective,
      multi: true
    }
  ]
})
export class EmailExistDirective implements AsyncValidator {

  constructor(
    private asyncValidators: AsyncValidatorsService
  ) { }

  validate(control: FormControl): Observable<ValidationErrors> {
    return this.asyncValidators.emailExist(control);
  }

}
