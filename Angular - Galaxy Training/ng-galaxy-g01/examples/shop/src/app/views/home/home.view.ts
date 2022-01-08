import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';
import { ProductsHttpService } from '../../services/products-http.service';
import { ShoppingCartActionAddProduct } from '../../store/shopping-cart/shopping-cart.actions';
import { ShoppingCartStore } from '../../store/shopping-cart/shopping-cart.store';

@Component({
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView {
  categoryField = new FormControl('');
  products$: Observable<Product[]>;
  categories$: Observable<string[]>;

  constructor(
    private productsHttp: ProductsHttpService,
    private shoppingCartStore: ShoppingCartStore,
    private snackBar: MatSnackBar
  ) {
    this.products$ = this.productsHttp.getAll();
    this.categories$ = this.productsHttp.getAllCategories();

    this.categoryField.valueChanges
    .pipe(
      tap(category => this.products$ = this.productsHttp.getAll({ category }))
    )
    .subscribe(console.log);
  }

  addShoppingCartProduct(product: Product): void {
    this.shoppingCartStore.dispatch(new ShoppingCartActionAddProduct({ product }));
    this.snackBar.open(`${product.title.slice(0, 10)}... Agregado!`, null, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 1500
    });
  }
}
