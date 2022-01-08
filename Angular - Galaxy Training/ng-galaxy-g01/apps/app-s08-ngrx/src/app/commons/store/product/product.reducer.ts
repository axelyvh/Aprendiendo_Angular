import { createReducer, on, Action } from '@ngrx/store';
import { productAddAction, productRemoveAction, productSelectAction, productSetAction, productUpdateAction } from './product.actions';
import { ProductState } from './product.state';

const initialProductState: ProductState = {
  products: [],
  loaded: false,
  selected: undefined
};

const reducer = createReducer(
  initialProductState,
  on(productSetAction, (state, payload) => ({
    ...state,
    products: payload.products,
    loaded: true
  })),
  on(productAddAction, (state, payload) => ({
    ...state,
    products: [...state.products, payload.product],
  })),
  on(productUpdateAction, (state, payload) => ({
    ...state,
    products: state.products.map(product => {
      if (product.id === payload.productId) {
        return payload.product;
      }
      return product;
    }),
  })),
  on(productSelectAction, (state, payload) => ({
    ...state,
    selected: state.products.find(product => product.id === payload.productId),
  })),
  on(productRemoveAction, (state, payload) => ({
    ...state,
    products: state.products.filter(product => product.id !== payload.productId),
  })),
);

export const productReducer = (state: ProductState, action: Action) => {
  return reducer(state, action);
};
