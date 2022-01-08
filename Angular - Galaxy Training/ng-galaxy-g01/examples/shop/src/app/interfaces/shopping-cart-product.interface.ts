import { Product } from './product.interface';

export type ShoppingCartProduct = Product & { quantity: number };
