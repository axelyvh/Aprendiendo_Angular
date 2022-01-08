import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'apps/app-s07-ractive-forms/src/app/commons/forms/custom.validators';
import { Bill } from 'apps/app-s07-ractive-forms/src/app/commons/interfaces/bill.interface';
import { OnLeaveView } from 'apps/app-s07-ractive-forms/src/app/commons/interfaces/on-leave-view.interface';
import { BillHttpService } from 'apps/app-s07-ractive-forms/src/app/commons/services/bill-http.service';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  templateUrl: './bill.view.html',
  styleUrls: ['./bill.view.css']
})
export class BillView implements OnInit, OnLeaveView, OnDestroy {
  billForm: FormGroup;
  saved = false;
  billState: Bill;

  subscriptions: Subscription = new Subscription();

  get productsField(): FormArray {
    return this.billForm.get('products') as FormArray;
  }

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private billHttp: BillHttpService,
  ) {
    /* Form Array de controles
    this.billForm = this.builder.group({
      client: this.builder.group({
        documentNumber: [null, Validators.required],
        fullname: [null, Validators.required]
      }),
      products: this.builder.array([
        this.builder.control(null),
        this.builder.control(null),
        this.builder.control(null),
        this.builder.control(null),
        this.builder.control(null),
      ])
    });
    */

    /* Form array de grupos */
    this.billForm = this.builder.group({
      client: this.builder.group({
        documentNumber: [null, Validators.required],
        fullname: [null, Validators.required]
      }),
      products: this.builder.array([
        this.getProductGroup(),
        this.getProductGroup(),
        this.getProductGroup(),
        this.getProductGroup(),
        this.getProductGroup(),
      ], {
        validators: CustomValidators.minArrayLength(3)
      })
    });

    const productsSubscription = this.productsField.valueChanges
    .pipe(
      filter(products => products.length > 5)
    )
    .subscribe(console.log);

    this.subscriptions.add(productsSubscription);
  }

  addProduct(): void {
    this.productsField.push(this.getProductGroup());
  }

  removeProduct(index: number): void {
    this.productsField.removeAt(index);
  }

  getProductGroup(): FormGroup {
    return this.builder.group({
      product: [null, Validators.required],
      quantity: null,
      price: null
    });
  }

  ngOnInit(): void {
    const billId = +this.route.snapshot.paramMap.get('billId');
    if (billId) {
      this.billHttp.getBill(billId)
      .subscribe(
        bill => {
          this.billState = bill;
          // this.titleField.setValue(''), this.titleField.pathValue('')
          /*
          // Reemplaza todos los valores del formgroup
          this.registerForm.setValue({
            email: 'asdasd'
          })
          // Actualiza solo algunos valores del formgroup
          this.registerForm.patchValue({
            email: 'asdasd'
          })
          */
         /*
          // Reemplaza todos los valores del formgroup
          this.productsArray.setValue([
            {price: 10, product: '', quantity: 1},
          ])
          // Actualiza solo algunos valores del formgroup
          this.registerForm.patchValue([
            {price: 10, product: '', quantity: 1},
          ])
          */

          this.billForm.patchValue({
            client: {
              documentNumber: bill.client.documentNumber,
              fullname: bill.client.fullName
            },
            products: bill.products.map(product => ({
              product: product.product,
              quantity: product.quantity,
              price: product.price
            }))
          });
        }
      );
    }
  }

  save(): void {
    console.log(this.billForm.valid);
    console.log(this.billForm.value);
    this.saved = true;
  }

  reset(): void {
    if (this.billState) {
      this.billForm.reset({
        client: {
          documentNumber: this.billState.client.documentNumber,
          fullname: this.billState.client.fullName
        },
        products: this.billState.products.map(product => ({
          product: product.product,
          quantity: product.quantity,
          price: product.price
        }))
      });
    } else {
      this.billForm.reset();
    }
  }

  onLeaveView(): boolean {
    if (this.saved) {
      return true;
    }
    return confirm('Si sale se perderan sus cambios');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
