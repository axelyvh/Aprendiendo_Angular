import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ProductState } from './product.state';

const productStateSelector = (state: AppState) => state.productState;

export const productsSelector = createSelector(
  productStateSelector,
  (productState: ProductState) => productState.products
);

export const loadedSelector = createSelector(
  productStateSelector,
  (productState: ProductState) => productState.loaded
);

export const productSelectedSelector = createSelector(
  productStateSelector,
  (productState: ProductState) => productState.selected
);

