import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../appmodel/cart';
import { CartItemService } from '../cart-item.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private cartItemService: CartItemService) { }

  data: any;

  ngOnInit(): void {

    this.cartItemService.getAllCartItem().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
    })

  }





  deleteCartItem(info) {
    alert(info['cartItemId'])
  }
}


