import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './appmodel/order';
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

  

  cancelOrder(orderId: number){
    let url = "http://localhost:8282/cancel-order?orderId=" + orderId;
    return this.http.get<Order>(url);
  }
}
