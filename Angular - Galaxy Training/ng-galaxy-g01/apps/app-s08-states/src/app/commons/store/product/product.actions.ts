import { Product } from '../../interfaces/product.interface';

export enum ProductActionType {
  SET = '[PRODUCT] SET',
  ADD = '[PRODUCT] ADD',
  UPDATE = '[PRODUCT] UPDATE',
  SELECT = '[PRODUCT] SELECT',
  REMOVE = '[PRODUCT] REMOVE',
}

export class ProductSetAction {
  public readonly type = ProductActionType.SET;
  constructor(public payload: { products: Product[] }) {
  }
}

export class ProductAddAction {
  public readonly type = ProductActionType.ADD;
  constructor(public payload: { product: Product }) {
  }
}

export class ProductUpdateAction {
  public readonly type = ProductActionType.UPDATE;
  constructor(public payload: { productId: number, product: Product }) {
  }
}

export class ProductSelectAction {
  public readonly type = ProductActionType.SELECT;
  constructor(public payload: { productId: number }) {
  }
}

export class ProductRemoveAction {
  public readonly type = ProductActionType.REMOVE;
  constructor(public payload: { productId: number }) {
  }
}

export type ProductAction =  ProductSetAction
                    | ProductAddAction
                    | ProductUpdateAction
                    | ProductSelectAction
                    | ProductRemoveAction;
