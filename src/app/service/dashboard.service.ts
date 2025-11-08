import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Painting } from './artist-login.service';
import { Order } from '../model/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private paintingsUrl = 'http://localhost:8000/paintings/list/';
  private ordersUrl = 'http://localhost:8000/paintings/orders/';

  // Inject HttpClient and assign it to 'http' property
  constructor(private http: HttpClient) {}

  getPaintings(): Observable<Painting[]> {
    return this.http.get<Painting[]>(this.paintingsUrl);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }
}
