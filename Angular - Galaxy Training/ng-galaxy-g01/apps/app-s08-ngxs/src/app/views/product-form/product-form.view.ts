import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../commons/interfaces/product.interface';
import { ProductsHttpService } from '../../commons/services/products-http.service';
import { ProductAddAction, ProductSelectAction, ProductUpdateAction } from '../../commons/store/product/product.actions';
import { ProductState } from '../../commons/store/product/product.state';

@Component({
  templateUrl: './product-form.view.html',
  styleUrls: ['./product-form.view.css']
})
export class ProductFormView implements OnInit {
  productForm: FormGroup;
  productId: number;

  @Select(ProductState.productSelected) productSelected$: Observable<Product>;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsHttp: ProductsHttpService,
    private store: Store,
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
    this.store.dispatch(new ProductSelectAction(this.productId));
    this.productSelected$
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
        this.store.dispatch(new ProductUpdateAction(this.productId, productUpdated));
        this.goListView();
      }
    );
  }

  private create(): void {
    this.productsHttp.create(this.productForm.value)
    .subscribe(
      productCreated => {
        this.store.dispatch(new ProductAddAction(productCreated));
        this.goListView();
      }
    );
  }

  goListView(): void {
    this.router.navigateByUrl('/');
  }

}
