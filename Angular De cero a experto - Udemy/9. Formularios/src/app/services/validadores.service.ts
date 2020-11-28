import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl) : {[s: string]: boolean} {

    if(control.value?.toLowerCase() == "herrera") {

      return {
        noHerrera: true
      }

    }

    return null;

  }

  EqualsTwoControl(control1: string, control2: string) {

    return (formGroup: FormGroup) => {

      const fc1 = formGroup.controls[control1];
      const fc2 = formGroup.controls[control2];

      if ( fc1.value === fc2.value ) {

        fc2.setErrors(null);

      } else {

        fc2.setErrors({ noEsIgual: true });

      }

    }

  }

  existeUsuario( control: FormControl ): Promise<any> | Observable<any> {

    if(!control.value) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        if(control.value == "Axel") {

          resolve({existe: true});

        } else {

          resolve(null);

        }

      })

    })

  }

}
