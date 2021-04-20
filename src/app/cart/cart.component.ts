import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../appmodel/cartItem';
import { Order } from '../appmodel/order';
import { CartItemService } from '../cart-item.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private cartItemService: CartItemService) { }

  data: any;
  cartItems: CartItem = new CartItem();
  order: Order = new Order();

  ngOnInit(): void {
    this.cartItems.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
    alert(this.cartItems.cart.cartId)
    this.cartItemService.getAllCartItem(this.cartItems).subscribe(data => {
      alert(JSON.stringify(data))
      console.log("is it " + data);
      this.data = data;
    })
  }

  placeOrder() {
    this.order.customer.customerId = parseInt(sessionStorage.getItem('customerId'))
    this.orderService.placeOrder(this.order).subscribe(data => {
      console.log(data);
      alert(JSON.stringify(data))
      sessionStorage.setItem('registeredOrderId', data['registeredOrderId'])
      this.data = data;
    })

  }




  deleteCartItem(info) {
    alert(info['cartItemId'])
  }
}


