import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RadioGroupOption } from 'apps/app-s06-driven-forms/src/app/commons/components/radio-group/radio-group.interface';
import { AsyncValidatorsService } from 'apps/app-s07-ractive-forms/src/app/commons/forms/async-validators.service';
import { CustomValidators } from 'apps/app-s07-ractive-forms/src/app/commons/forms/custom.validators';

@Component({
  templateUrl: './product-create.view.html',
  styleUrls: ['./product-create.view.css'],
})
export class ProductCreateView implements OnInit {
  formCheckboxes = new FormGroup({
    checkboxes: new FormArray([])
  })

  titleField: FormControl = new FormControl('Hola Mundo', Validators.required);

  productForm: FormGroup;

  registerForm: FormGroup;

  get titleControl(): FormControl {
    return this.productForm.get('title') as FormControl;
  }

  get emailField(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  options: RadioGroupOption[] = [
    { label: 'Studiante', value: 'S' },
    { label: 'Profesor', value: 'P' },
  ];

  constructor(
    private builder: FormBuilder,
    private asyncValidators: AsyncValidatorsService
    ) {
    /* FORMA CONVENCIONAL
    this.productForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      description: new FormControl(),
      category: new FormControl(),
      image: new FormControl(),
    });
    */

    this.productForm = this.builder.group({
      title: [null, Validators.required],
      price: [null, [Validators.required, CustomValidators.range(5, 15)]],
      description: null,
      category: null,
      image: [ { value: null, disabled: true } ],
    });
    // this.productForm.get('image').enable();

    this.registerForm = this.builder.group({
      email: [null, CustomValidators.emailFormat],
      password: [null, CustomValidators.strongPassword],
      confirmPassword: null,
      rol: null
    }, {
      validators: CustomValidators.passwordConfirm('password', 'confirmPassword')
    });

    // EScuchar el cambio de los valores
    this.titleField.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}

  addRegisterControl(): void {
    this.registerForm.addControl('age', new FormControl(null, Validators.required));
  }

  removeRegisterControl(): void {
    this.registerForm.removeControl('age');
  }

  setTitleFieldValidators(): void {
    this.titleField.setValidators([Validators.required, Validators.minLength(5)]);
    this.titleField.updateValueAndValidity();
  }

  clearTitleFieldValidators(): void {
    // PARA QUITAR ALGUNAS VALIDACIONES this.titleField.setValidators([Validators.minLength(5)]);
    this.titleField.clearValidators();
    this.titleField.updateValueAndValidity();
  }

  addCheckbox(e) {
    const array = this.formCheckboxes.get('checkboxes') as FormArray;
    if (e.target.checked) {
      array.push(new FormControl(e.target.value));
    } else {
      const index = array.value.findIndex(checkboxValue => checkboxValue === e.target.value)
      array.removeAt(index);
    }
  }
}
