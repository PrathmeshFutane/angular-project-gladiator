import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { Cart } from '../appmodel/cart';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartService: CartServiceService, private productService: AddProductService) { }

  data: any;
  cart: Cart = new Cart();
  addToCartFlag: boolean = true;

  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
    })

  }


  // mycart(data) {
  //   alert(data['id'];
  // }

  addToCart() {
    //create cart on page load for customer
    if (this.addToCartFlag) {
      if (sessionStorage.getItem('customerId') != undefined) {
        this.cart.customer.customerId = parseInt(sessionStorage.getItem('customerId'));
        alert(JSON.stringify(this.cart));
        this.cartService.createCart(this.cart).subscribe(data => {
          alert(JSON.stringify(data));
        })
      }
    }
    this.addToCartFlag = false;
  }
}
