import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersHttpService } from '../services/users-http.service';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorsService {

  constructor(
    private usersHttp: UsersHttpService
  ) { }

  emailExist(control: FormControl): Observable<ValidationErrors> {
    const email = control.value || '';

    return this.usersHttp.searchByEmail(email)
    .pipe(
      tap(users => console.log(users)),
      map(users => {
        return (users?.length) ? null : { emailExist: 'El email ingresado no esta registrado' }
      }),
    );
  }
}
