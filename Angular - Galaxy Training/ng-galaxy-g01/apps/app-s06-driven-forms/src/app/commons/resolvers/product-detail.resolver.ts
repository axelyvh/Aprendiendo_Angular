import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductsHttpService } from '../services/products-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Product> {

  constructor(
    private productsHttp: ProductsHttpService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +route.paramMap.get('productId');

    return this.productsHttp.getOne(id);
  }

}
