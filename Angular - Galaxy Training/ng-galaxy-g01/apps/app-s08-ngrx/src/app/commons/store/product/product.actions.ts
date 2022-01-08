import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';

export enum ProductActionType {
  SET = '[PRODUCT] SET',
  ADD = '[PRODUCT] ADD',
  UPDATE = '[PRODUCT] UPDATE',
  SELECT = '[PRODUCT] SELECT',
  REMOVE = '[PRODUCT] REMOVE',
}

export const productSetAction = createAction(
  ProductActionType.SET,
  props<{ products: Product[] }>()
);

export const productAddAction = createAction(
  ProductActionType.ADD,
  props<{ product: Product }>()
);

export const productUpdateAction = createAction(
  ProductActionType.UPDATE,
  props<{ productId: number, product: Product }>()
);

export const productSelectAction = createAction(
  ProductActionType.SELECT,
  props<{ productId: number }>()
);

export const productRemoveAction = createAction(
  ProductActionType.REMOVE,
  props<{ productId: number }>()
);
