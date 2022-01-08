import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';
import { Store } from '../store';
import { productReducer } from './product.reducer';
import { ProductState } from './product.state';

const initialProductState: ProductState = {
  products: [],
  loaded: false,
  selected: undefined
};

@Injectable({
  providedIn: 'root',
})
export class ProductStore extends Store<ProductState> {
  products$: Observable<Product[]> = this.select<Product[]>(state => state.products);
  loaded$: Observable<boolean> = this.select<boolean>(state => state.loaded);
  productSelected$: Observable<Product> = this.select<Product>(state => state.selected);

  constructor() {
    super(initialProductState, productReducer);
  }
}

