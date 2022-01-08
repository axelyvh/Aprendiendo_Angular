import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EMPTY, iif, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../commons/interfaces/product.interface';
import { ProductsHttpService } from '../../commons/services/products-http.service';
import { ProductRemoveAction, ProductSetAction } from '../../commons/store/product/product.actions';
import { ProductState } from '../../commons/store/product/product.state';

@Component({
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.css']
})
export class ProductListView implements OnInit {
  @Select(ProductState.products) products$: Observable<Product[]>;
  @Select(ProductState.loaded) loaded$: Observable<boolean>;
  // products: Product[] = [];

  constructor(
    private productsHttp: ProductsHttpService,
    private store: Store
  ) {
    /*
    this.productStore.products$
    .subscribe(
      res => this.products = res // [], [{...}],
    );
    */
  }

  ngOnInit(): void {
    /* OPCION 1
    if (!this.productStore.state.loaded) {
      this.productsHttp.getAll()
      .subscribe(
        products => this.productStore.dispatch(new ProductSetAction({ products })),
      );
    }
    */
    this.loaded$
      .pipe(
        switchMap(isLoaded => iif(() => !isLoaded, this.productsHttp.getAll(), EMPTY))
      ).subscribe(
        products => this.store.dispatch(new ProductSetAction(products)),
      );
  }

  remove(productId: number): void {
    const yes = confirm('Desea eliminar el producto');
    if (yes) {
      this.productsHttp.delete(productId)
      .subscribe(
        () => this.store.dispatch(new ProductRemoveAction(productId))
      );
    }
  }

  /*
  ngOnInit(): void {

    const subject = new BehaviorSubject('paso 0');
    const obsevable = subject.asObservable();

    obsevable.subscribe(
      res => console.log(res), // paso 0, paso 1, paso 2, paso 3, paso 4
      err => console.error(err),
      () => console.log('complete'),
    );

    subject.next('paso 1');
    subject.next('paso 2');
    subject.next('paso 3');

    obsevable.subscribe(
      res => console.log(res), // paso 3, paso 4
      err => console.error(err),
      () => console.log('complete'),
    );

    subject.next('paso 4');

    obsevable.subscribe(
      res => console.log(res), // paso 4
      err => console.error(err),
      () => console.log('complete'),
    );



    const http = new Observable((subscriber) => {

      fetch('http://...')
        .then(res => res.json())
        .then(res => {
          subscriber.next(res);
          subscriber.next(res);
          subscriber.next(res);
          subscriber.next(res);
          subscriber.complete();

        })
        .catch(res => subscriber.error(res));

    });

    http.subscribe(
      res => console.log(res), // se va ejecutar 4 veces
      err => console.error(err),
      () => console.log('complete'),
    );


  }
  */

}
