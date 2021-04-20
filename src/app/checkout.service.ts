import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderItem } from './appmodel/orderItem';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }



  getAllOrderItem(orderItem: OrderItem) {
    let url = "http://localhost:8282/get-all-order-item";
    return this.http.post(url, orderItem);
  }
}
