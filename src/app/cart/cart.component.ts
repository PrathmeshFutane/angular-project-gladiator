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

  data: [];
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
    this.cartItems.cartItemId = info['cartItemId']
    alert(this.cartItems.cartItemId)
    this.cartItemService.deleteCartitem(this.cartItems).subscribe(data => {
      alert(JSON.stringify(data))
      //removing the element from array
    })
    // alert(info['cartItemId'])
  }

  updateQuantity(quantity, info) {

    if (quantity > 0) {
      if (quantity <= 4) {
        //code for backend
        alert(quantity + " " + JSON.stringify(info))
        console.log(JSON.stringify(info))
        this.cartItems.quantity = quantity;
        this.cartItems.cartItemId = info.cartItemId;
        this.cartItems.cart.cartId = info.cart.cartId;
        this.cartItems.product.productId = info.product.productId;

        alert(this.cartItems.product.productId)

        this.cartItemService.updateQuantity(this.cartItems).subscribe(data => {
          alert(JSON.stringify(data));
        })
      }
      else {
        alert("more than four is not allowed")
      }
    }
    else {
      alert("less than zero is not allowed")
    }

  }
}


