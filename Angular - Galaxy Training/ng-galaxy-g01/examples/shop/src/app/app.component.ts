import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartActionPopulate } from './store/shopping-cart/shopping-cart.actions';
import { ShoppingCartStore } from './store/shopping-cart/shopping-cart.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoppingCardProductsCount$: Observable<number>;

  constructor(
    private shoppingCartStore: ShoppingCartStore,
  ) {
    this.shoppingCardProductsCount$ = this.shoppingCartStore.productsCount$;
    this.shoppingCartStore.dispatch(new ShoppingCartActionPopulate());
  }

}
