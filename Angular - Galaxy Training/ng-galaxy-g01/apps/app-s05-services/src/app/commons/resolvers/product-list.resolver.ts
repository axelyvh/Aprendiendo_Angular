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
export class ProductListResolver implements Resolve<Product[]> {

  constructor(
    private productsHttp: ProductsHttpService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productsHttp.getAll();
  }
}
