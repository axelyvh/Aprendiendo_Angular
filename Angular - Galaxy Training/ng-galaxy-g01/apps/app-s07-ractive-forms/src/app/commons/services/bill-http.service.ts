import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../interfaces/bill.interface';

@Injectable({
  providedIn: 'root'
})
export class BillHttpService {

  constructor(private http: HttpClient) { }

  getBill(billId: number): Observable<Bill> {
    return this.http.get<Bill>(`/bill/${billId}`);
  }
}
