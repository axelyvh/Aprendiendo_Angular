import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartProduct } from '../../interfaces/shopping-cart-product.interface';
import { ShoppingCartActionDeleteProduct, ShoppingCartDecrementActionProduct, ShoppingCartIncrementActionProduct } from '../../store/shopping-cart/shopping-cart.actions';
import { ShoppingCartStore } from '../../store/shopping-cart/shopping-cart.store';

@Component({
  templateUrl: './shopping-card.view.html',
  styleUrls: ['./shopping-card.view.scss']
})
export class ShoppingCardView {
  displayedColumns: string[] = ['title', 'price', 'quantity', 'total', 'actions'];
  shoppingCartProducts$: Observable<ShoppingCartProduct[]>;
  shoppingCartTotal$: Observable<number>;

  constructor(private shoppingCartStore: ShoppingCartStore) {
    this.shoppingCartProducts$ = this.shoppingCartStore.products$;
    this.shoppingCartTotal$ = this.shoppingCartStore.total$;
  }

  incrementQuantity(productId: number): void {
    this.shoppingCartStore.dispatch(new ShoppingCartIncrementActionProduct({ productId }));
  }

  decrementQuantity(productId: number): void {
    this.shoppingCartStore.dispatch(new ShoppingCartDecrementActionProduct({ productId }));
  }

  remove(productId: number): void {
    this.shoppingCartStore.dispatch(new ShoppingCartActionDeleteProduct({ productId }));
  }
}
