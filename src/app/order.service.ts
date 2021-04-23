import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './appmodel/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  placeOrder(order: Order): Observable<any> {
    let url = "http://localhost:8282/place-order";
    return this.http.post(url, order);
  }

  cancelOrder(order: Order): Observable<any>{
    let url = "http://localhost:8282/cancel-order";
    return this.http.post(url, order);
  }
}
