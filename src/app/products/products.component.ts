import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { CartItemService } from '../cart-item.service';
import { CartItem, Product } from '../appmodel/cartItem';
import { SharedService } from '../shared.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartItemService: CartItemService, private productService: AddProductService, private sharedService: SharedService) { }

  data: any;
  quantity: any;
  id: number;
  products: Product[];
  searchValue: any;
  obj = [];



  cartItem: CartItem = new CartItem();

  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
    })

    // this.productService.displayAllData().subscribe((data: Product[]) => {
    //   this.products = data;
    //   this.searchValue = this.sharedService.getSearchValue();
    // })

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


  //add to compare
  addToCompare(information) {

    this.obj.push(information)
    sessionStorage.setItem("myCompare", JSON.stringify(this.obj))
  }





  //code for filter
  from500to1000() {
    alert('click')
    this.productService.filter500to1000().subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;
    })
  }

  from5000to10000() {
    alert('click')
    this.productService.filter5000to10000().subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;
    })
  }








}
