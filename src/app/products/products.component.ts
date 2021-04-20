import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { CartItemService } from '../cart-item.service';
import { CartItem } from '../appmodel/cartItem';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartItemService: CartItemService, private productService: AddProductService) { }

  data: any;
  quantity: any;
  id: number;

  cartItem: CartItem = new CartItem();

  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
    })

    this.productService.getAllQuantity().subscribe(data => {
      console.log(data)
      this.quantity = data;
      this.id = data['total_count']

    })
  }

  addToCart(productInformation) {
    //create cart on page load for customer
    alert(productInformation['productId'] + " " + productInformation['productName'] + " " + productInformation['productDescription'] + " " + this.id + " " + productInformation['unitPrice'])



    this.cartItem.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
    this.cartItem.product.productId = productInformation['productId'];
    this.cartItem.quantity = 1;

    //code to send data to database
    this.cartItemService.addToCart(this.cartItem).subscribe(data => {
      alert(JSON.stringify(data))
    })

  }
}
