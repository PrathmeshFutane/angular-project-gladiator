import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../appmodel/cartItem';
import { CartItemService } from '../cart-item.service';
import { AddCategoryServiceService } from '../category-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private router: Router, private categoryService: AddCategoryServiceService, private sharedService: SharedService, private cartItemService: CartItemService) { }

  categoryId: any;
  data: any;
  quantity: any;
  id: number;
  searchValue: any;
  cartItem: CartItem = new CartItem();
  page: number = 1;
  totalProducts: string;


  ngOnInit(): void {
    this.categoryId = this.sharedService.getCategoryId();
    //alert(this.categoryId)
    this.categoryService.getProductsByCategory(this.categoryId).subscribe(data => {
      //alert(JSON.stringify(data));
      this.data = data;
      console.log(data)
    })

  }


  addToCart(productInformation) {
    //create cart on page load for customer

    //alert(productInformation['productId'] + " " + productInformation['productName'] + " " + productInformation['productDescription'] + " " + this.id + " " + productInformation['unitPrice'])
    this.cartItem.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
    this.cartItem.product.productId = productInformation['productId'];
    this.cartItem.quantity = 1;

    //code to send data to database
    this.cartItemService.addToCart(this.cartItem).subscribe(data => {
      //alert(JSON.stringify(data))
    })

  }


  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }
}
