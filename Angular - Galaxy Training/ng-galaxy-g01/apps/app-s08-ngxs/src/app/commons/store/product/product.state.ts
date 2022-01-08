import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../../interfaces/product.interface';
import { ProductAddAction, ProductRemoveAction, ProductSelectAction, ProductSetAction, ProductUpdateAction } from './product.actions';

export interface ProductStateModel {
  products: Product[];
  loaded: boolean;
  selected: Product;
}

const initialProductState: ProductStateModel = {
  products: [],
  loaded: false,
  selected: undefined
};

@State<ProductStateModel>({
  name: 'productState',
  defaults: initialProductState
})
@Injectable()
export class ProductState {
  @Selector()
  static products(state: ProductStateModel): Product[] {
    return state.products;
  }

  @Selector()
  static loaded(state: ProductStateModel): boolean {
    return state.loaded;
  }

  @Selector()
  static productSelected(state: ProductStateModel): Product {
    return state.selected;
  }

  @Action(ProductSetAction)
  set(ctx: StateContext<ProductStateModel>, action: ProductSetAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: action.products,
      loaded: true
    });
  }

  @Action(ProductAddAction)
  add(ctx: StateContext<ProductStateModel>, action: ProductAddAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: [...state.products, action.product],
    });
  }

  @Action(ProductUpdateAction)
  update(ctx: StateContext<ProductStateModel>, action: ProductUpdateAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: state.products.map(product => {
        if (product.id === action.productId) {
          return action.product;
        }
        return product;
      }),
    });
  }

  @Action(ProductSelectAction)
  select(ctx: StateContext<ProductStateModel>, action: ProductSelectAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selected: state.products.find(product => product.id === action.productId),
    });
  }

  @Action(ProductRemoveAction)
  remove(ctx: StateContext<ProductStateModel>, action: ProductRemoveAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: state.products.filter(product => product.id !== action.productId),
    });
  }
}
