import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/register';
export interface OrderPayload {
  painting: number;
  quantity: number;
  full_name: string;
  address: string;
  phone: string;
  payment_method: 'COD' | 'Online';
}
@Injectable({
  providedIn: 'root'
})
export class ShopService {
private apiUrl = 'http://localhost:8000/paintings/order/'; // Change to your actual API endpoint

  constructor(private http: HttpClient) {}

  placeOrder(order: OrderPayload, csrfToken: string | null): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (csrfToken) {
      headers = headers.set('X-CSRFToken', csrfToken);
    }

    return this.http.post(this.apiUrl, order, { headers });
  }
}