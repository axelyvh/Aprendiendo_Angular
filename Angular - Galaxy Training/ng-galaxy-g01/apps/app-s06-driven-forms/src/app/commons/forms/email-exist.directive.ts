import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersHttpService } from '../services/users-http.service';

@Directive({
  selector: '[appEmailExist]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailExistDirective,
      multi: true
    }
  ]
})
export class EmailExistDirective implements AsyncValidator {

  constructor(
    private usersHttp: UsersHttpService
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    const email = control.value || '';

    return this.usersHttp.searchByEmail(email)
    .pipe(
      tap(users => console.log(users)),
      map(users => {
        return (users?.length) ? null : { emailExist: 'El email ingresado no esta registrado' }
      })
    )
  }

}
