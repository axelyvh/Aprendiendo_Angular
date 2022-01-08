import { FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
/*
export const strongPassword = (control: FormControl): ValidationErrors => {
  const value = control.value || '';

  const hasSpecialCharacter = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);

  const isValid = hasSpecialCharacter && hasNumber && hasUpperCase && hasLowerCase;
  return isValid ? null : { strongPassword: true };
};

export const range = (min: number, max: number): ValidatorFn => {
  return (control: FormControl): ValidationErrors => {
    const value = control.value;

    const isValid = value ?? (value > min && value < max);

    return isValid ? null : { range: true };
  };
};
*/

export class CustomValidators {
  static strongPassword(control: FormControl): ValidationErrors {
    const value = control.value || '';

    const hasSpecialCharacter = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);

    const isValid = hasSpecialCharacter && hasNumber && hasUpperCase && hasLowerCase;
    return isValid ? null : { strongPassword: true };
  }

  static range(min: number, max: number): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      const value = control.value;
      const isValid = value > min && value < max;

      return isValid ? null : { range: { min, max } };
    };
  }

  static passwordConfirm(passwordFieldName: string, confirmFieldName: string): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const password = group.get(passwordFieldName).value;
      const confirm = group.get(confirmFieldName).value;

      const isValid = password === confirm;

      return isValid ? null : { passwordConfirm: true };
    };
  }

  static emailFormat(control: FormControl): ValidationErrors {
    const value = control.value || '';
    const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

    const isValid = regexp.test(value);

    return isValid ? null : { emailFormat: 'El email debe tener el formato user@domain.ext' }
  }

  static minArrayLength(min: number): ValidatorFn {
    return (array: FormArray): ValidationErrors => {
      const length = array.length;

      const isValid = length >= min;

      return isValid ? null : { minArrayLength: { min } };
    };
  }

}
