import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OrderItem } from '../appmodel/orderItem';
import { Order } from '../appmodel/order';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.css']
})
export class CashOnDeliveryComponent implements OnInit {

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

  // for confirm Order
  confirmOrder() {
    //alert("this is confirm");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.order.customer.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.orderService.confirmOrder(this.order).subscribe(data => {
      //alert(JSON.stringify(data));
      Swal.fire({
        title: 'Order is placed',
        text: 'largest online shopping',
        imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.router.navigate(['success'])
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
