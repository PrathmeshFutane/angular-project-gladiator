import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../appmodel/order';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-final-checkout',
  templateUrl: './final-checkout.component.html',
  styleUrls: ['./final-checkout.component.css']
})
export class FinalCheckoutComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router, private checkoutService: CheckoutService) { }

  order: Order = new Order();
  data: any;
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





  confirmOrder() {
    alert("this is confirm");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.orderService.confirmOrder(this.order).subscribe(data => {
      alert(JSON.stringify(data));
      this.router.navigate(['bank-details'])
    })

  }

  cancelOrder() {
    //alert("this is cancel");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.orderService.cancelOrder(this.order).subscribe(data => {
      Swal.fire({
        title: 'Order is Cancelled',
        text: 'largest online shopping',
        imageUrl: 'https://img.favpng.com/0/11/3/smiley-emoticon-sadness-animation-clip-art-png-favpng-4TW3cwaPdc77DeYafp0cAG9P9.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      //alert(JSON.stringify(data));
    })
    this.router.navigate([''])
  }

}
