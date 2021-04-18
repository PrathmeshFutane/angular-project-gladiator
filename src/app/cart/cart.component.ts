import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../appmodel/cart';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartService: CartServiceService) { }

  data: any;
  message: any;
  mycartobj = [];
  quantity: number = 1;

  cart: Cart = new Cart();
  addToCartFlag: boolean = true;



  ngOnInit(): void {
    // loop through the fake api 
    let url = "https://fakestoreapi.com/products";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }






}


