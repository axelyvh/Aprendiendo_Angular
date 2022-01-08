import { Product } from '../../interfaces/product.interface';

export enum ProductActionType {
  SET = '[PRODUCT] SET',
  ADD = '[PRODUCT] ADD',
  UPDATE = '[PRODUCT] UPDATE',
  SELECT = '[PRODUCT] SELECT',
  REMOVE = '[PRODUCT] REMOVE',
}

export class ProductSetAction {
  static readonly type = ProductActionType.SET;
  constructor(public products: Product[]) {
  }
}

export class ProductAddAction {
  static readonly type = ProductActionType.ADD;
  constructor(public product: Product) {
  }
}

export class ProductUpdateAction {
  static readonly type = ProductActionType.UPDATE;
  constructor(public productId: number, public product: Product) {
  }
}

export class ProductSelectAction {
  static readonly type = ProductActionType.SELECT;
  constructor(public productId: number) {
  }
}

export class ProductRemoveAction {
  static readonly type = ProductActionType.REMOVE;
  constructor(public productId: number) {
  }
}
