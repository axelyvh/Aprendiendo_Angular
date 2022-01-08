import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsHttpService } from '../../commons/services/products-http.service';
import { ProductAddAction, ProductSelectAction, ProductUpdateAction } from '../../commons/store/product/product.actions';
import { ProductStore } from '../../commons/store/product/product.store';

@Component({
  templateUrl: './product-form.view.html',
  styleUrls: ['./product-form.view.css']
})
export class ProductFormView implements OnInit {
  productForm: FormGroup;
  productId: number;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsHttp: ProductsHttpService,
    private productStore: ProductStore,
  ) {
    this.productForm = this.builder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    if (productId) { this.load(productId); }
  }

  save(): void {
    if (this.productForm.valid) {
      this.productId ? this.update() : this.create();
    }
  }

  private load(productId: string): void {
    this.productId = +productId;
    this.productStore.dispatch(new ProductSelectAction({ productId: this.productId }));
    this.productStore.productSelected$
      .pipe(
        switchMap(productSelected => iif(() => !productSelected, this.productsHttp.getOne(this.productId), of(productSelected)))
      )
      .subscribe(
        product => {
          this.productForm.patchValue({
            title: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
          });
        }
      );
  }

  private update(): void {
    this.productsHttp.update(this.productId, this.productForm.value)
    .subscribe(
      productUpdated => {
        this.productStore.dispatch(new ProductUpdateAction({ productId: this.productId, product: productUpdated }));
        this.goListView();
      }
    );
  }

  private create(): void {
    this.productsHttp.create(this.productForm.value)
    .subscribe(
      productCreated => {
        this.productStore.dispatch(new ProductAddAction({ product: productCreated }));
        this.goListView();
      }
    );
  }

  goListView(): void {
    this.router.navigateByUrl('/');
  }

}
