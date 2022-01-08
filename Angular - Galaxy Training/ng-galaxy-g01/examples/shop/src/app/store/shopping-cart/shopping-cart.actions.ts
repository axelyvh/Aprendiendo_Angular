import { Product } from '../../interfaces/product.interface';

export enum ShoppingCartActionType {
  POPULATE = '[SHOPPING CART] POPULATE',
  ADD_PRODUCT = '[SHOPPING CART] ADD PRODUCT',
  DELETE_PRODUCT = '[SHOPPING CART] DELETE PRODUCT',
  INCREMENT_PRODUCT_QUANTITY = '[SHOPPING CART] INCREMENT PRODUCT QUANTITY',
  DECREMENT_PRODUCT_QUANTITY = '[SHOPPING CART] DECREMENT PRODUCT QUANTITY',
}

export class ShoppingCartActionPopulate {
  public readonly type = ShoppingCartActionType.POPULATE;
}

export class ShoppingCartActionAddProduct {
  public readonly type = ShoppingCartActionType.ADD_PRODUCT;
  constructor(public payload: { product: Product }) {}
}

export class ShoppingCartActionDeleteProduct {
  public readonly type = ShoppingCartActionType.DELETE_PRODUCT;
  constructor(public payload: { productId: number }) {}
}

export class ShoppingCartIncrementActionProduct {
  public readonly type = ShoppingCartActionType.INCREMENT_PRODUCT_QUANTITY;
  constructor(public payload: { productId: number }) {}
}

export class ShoppingCartDecrementActionProduct {
  public readonly type = ShoppingCartActionType.DECREMENT_PRODUCT_QUANTITY;
  constructor(public payload: { productId: number }) {}
}

export type ShoppingCartAction = ShoppingCartActionPopulate
  | ShoppingCartActionAddProduct
  | ShoppingCartActionDeleteProduct
  | ShoppingCartIncrementActionProduct
  | ShoppingCartDecrementActionProduct;
