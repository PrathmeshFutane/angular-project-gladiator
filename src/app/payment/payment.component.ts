import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../appmodel/order';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private checkoutService: CheckoutService, private modalService: NgbModal) { }

  data: any;

  order: Order = new Order();

  orderItem: OrderItem = new OrderItem();
  orderId = parseInt(sessionStorage.getItem('registeredOrderId'))

  ngOnInit(): void {
    this.orderItem.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkoutService.getAllOrderItem(this.orderItem).subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
      console.log(data)
    })
  }

}
