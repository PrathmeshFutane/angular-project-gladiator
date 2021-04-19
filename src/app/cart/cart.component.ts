import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../appmodel/cartItem';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private cartItemService: CartItemService) { }

  data: any;
  cartItems: CartItem = new CartItem();

  ngOnInit(): void {
    this.cartItems.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
    alert(this.cartItems.cart.cartId)
    this.cartItemService.getAllCartItem(this.cartItems).subscribe(data => {
      alert(JSON.stringify(data))
      console.log("is it " + data);
      this.data = data;
    })

  }

  deleteCartItem(info) {
    alert(info['cartItemId'])
  }
}


