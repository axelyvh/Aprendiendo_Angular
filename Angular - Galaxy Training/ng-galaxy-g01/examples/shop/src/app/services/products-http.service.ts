import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

  getAll(filters?: Partial<Product>): Observable<Product[]> {
    let params = new HttpParams();
    if (filters?.category) {
      params = params.append('category', filters.category);
    }
    return this.http.get<Product[]>(this.endpoint, { params });
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.endpoint}/categories`);
  }
}
