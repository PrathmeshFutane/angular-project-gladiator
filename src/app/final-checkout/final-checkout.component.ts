import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../appmodel/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-final-checkout',
  templateUrl: './final-checkout.component.html',
  styleUrls: ['./final-checkout.component.css']
})
export class FinalCheckoutComponent implements OnInit {

  constructor(private orderService : OrderService,private router: Router) { }

  order: Order = new Order();

  ngOnInit(): void {
  }

  confirmOrder(){
    alert("this is confirm");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.orderService.confirmOrder(this.order).subscribe(data=>{
      alert(JSON.stringify(data));

    })

  }

  cancelOrder(){
    alert("this is cancel");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.orderService.cancelOrder(this.order).subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

}
