import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartProduct } from '../../interfaces/shopping-cart-product.interface';
import { Store } from '../store';
import { shoppingCartReducer } from './shopping-cart.reducer';
import { ShoppingCartState } from './shopping-cart.state';

const initialState: ShoppingCartState = {
  products: [],
};

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartStore extends Store<ShoppingCartState> {
  products$: Observable<ShoppingCartProduct[]> = this.select(shoppingCart => shoppingCart.products);
  productsCount$: Observable<number> = this.products$.pipe(map(products => {
    return products.map(product => product.quantity).reduce((quantity, total) => {
      total += quantity;
      return total;
    }, 0);
  }));
  total$: Observable<number> = this.products$.pipe(map(products => {
    return products.map(product => (product.quantity * product.price)).reduce((subtotal, total) => {
      total += subtotal;
      return total;
    }, 0);
  }));

  constructor() {
    super(initialState, shoppingCartReducer);
  }
}

