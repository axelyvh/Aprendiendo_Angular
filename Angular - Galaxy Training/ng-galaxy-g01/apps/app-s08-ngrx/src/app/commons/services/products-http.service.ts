import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  endpoint = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  getOne(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${productId}`);
  }

  create(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.endpoint, product);
  }

  update(productId: number, product: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(`${this.endpoint}/${productId}`, product);
  }

  delete(productId: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.endpoint}/${productId}`);
  }
}
