import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    const headers = {
      'X-TOKEN': 'asdasdasd'
    };
    return this.http.get<Product[]>('/products', { headers });
  }

  getOne(id: number): Observable<Product> {
    return this.http.get<Product>(`/products/${id}`);
  }
}
