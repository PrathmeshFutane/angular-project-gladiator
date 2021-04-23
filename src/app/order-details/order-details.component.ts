import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../appmodel/order';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private orderService: OrderService,private checkoutService: CheckoutService, private modalService: NgbModal) { }


  orderItem: OrderItem = new OrderItem();
  data: any;
  order: Order = new Order();

  ngOnInit(): void {
    this.orderItem.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkoutService.getAllOrderItem(this.orderItem).subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
      console.log(data)
    })
  }

  cancelOrder(){
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    alert(this.order.orderId);
  }

}
