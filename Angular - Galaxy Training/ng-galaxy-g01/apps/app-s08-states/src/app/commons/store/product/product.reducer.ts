import { ProductAction, ProductActionType } from './product.actions';
import { ProductState } from './product.state';

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionType.SET:
      return {
        ...state,
        products: action.payload.products,
        loaded: true
      };
    case ProductActionType.ADD:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };

    case ProductActionType.UPDATE:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return action.payload.product;
          }
          return product;
        }),
      };

    case ProductActionType.SELECT:
      return {
        ...state,
        selected: state.products.find(product => product.id === action.payload.productId),
      };

    case ProductActionType.REMOVE:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };
    default:
      return { ...state };
  }
};
