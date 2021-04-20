import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private checkout: CheckoutService) { }

  data: any;


  orderItem: OrderItem = new OrderItem();


  ngOnInit(): void {
    this.orderItem.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkout.getAllOrderItem(this.orderItem).subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;
    })
  }

}
