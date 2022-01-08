import { Product } from '../../interfaces/product.interface';

export interface ProductState {
  products: Product[];
  loaded: boolean;
  selected: Product;
}
