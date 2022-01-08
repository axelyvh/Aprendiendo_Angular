import { Product } from '../../interfaces/product.interface';
import { ShoppingCartProduct } from '../../interfaces/shopping-cart-product.interface';
import { ShoppingCartAction, ShoppingCartActionType } from './shopping-cart.actions';
import { ShoppingCartState } from './shopping-cart.state';

/*
Para persistencia de este ejemplo, se guarda el carrito en el localstorage
con la finalidad de que al recargar la pagina no se borre la info del carrito
*/
const setShoppingCartToStorage = (state: ShoppingCartState): ShoppingCartState => {
  localStorage.setItem('shopping-cart', JSON.stringify(state));

  return state;
};

const getShoppingCartFromStorage = (state: ShoppingCartState): ShoppingCartState => {
  const storage = localStorage.getItem('shopping-cart');

  try {
    return storage ? (JSON.parse(storage) as ShoppingCartState) : { ...state };
  } catch {
    return { ...state };
  }

};

const addShoppingCardProduct = (products: ShoppingCartProduct[], product: Product): ShoppingCartProduct[] => {
  return [ ...products, { ...product, quantity: 1 } ];
};

const incrementProductQuantity = (products: ShoppingCartProduct[], productId: number): ShoppingCartProduct[] => {
  return products.map(product => {
    if (product.id === productId) {
      product.quantity += 1;
      return product;
    }
    return product;
  });
};

const decrementProductQuantity = (products: ShoppingCartProduct[], productId: number): ShoppingCartProduct[] => {
  return products.map(product => {
    if (product.id === productId) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
      return product;
    }
    return product;
  });
};

export const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState => {
  switch (action.type) {
    case ShoppingCartActionType.POPULATE:
      return getShoppingCartFromStorage(state);

    case ShoppingCartActionType.ADD_PRODUCT:
      /*
      Buscamos si el producto a agregar ya existe dentro de la lista de productos del carrito
      Si existe: le sumamos una unidad y generamos la nueva lista actualizada
      Si no existe: generamos una nueva lista agregando el nuevo producto con cantidad 1
      */
      const productStored = state.products.find(product => product.id === action.payload.product.id);

      return setShoppingCartToStorage({
        products: productStored
          ? incrementProductQuantity(state.products, action.payload.product.id)
          : addShoppingCardProduct(state.products, action.payload.product)
      });

    case ShoppingCartActionType.DELETE_PRODUCT:
      return setShoppingCartToStorage({
        products: state.products.filter(product => (product.id !== action.payload.productId))
      });

    case ShoppingCartActionType.INCREMENT_PRODUCT_QUANTITY:
      return setShoppingCartToStorage({
        products: incrementProductQuantity(state.products, action.payload.productId)
      });

    case ShoppingCartActionType.DECREMENT_PRODUCT_QUANTITY:
      return setShoppingCartToStorage({
        products: decrementProductQuantity(state.products, action.payload.productId)
      });

    default:
      return { ...state };
  }
};
