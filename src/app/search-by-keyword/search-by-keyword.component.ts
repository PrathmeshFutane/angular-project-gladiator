import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, Product } from '../appmodel/cartItem';
import { CartItemService } from '../cart-item.service';
import { SearchService } from '../search.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search-by-keyword',
  templateUrl: './search-by-keyword.component.html',
  styleUrls: ['./search-by-keyword.component.css']
})
export class SearchByKeywordComponent implements OnInit {

  constructor(private sharedService: SharedService, private searchService: SearchService, private cartItemService: CartItemService, private router: Router) {

  }




  data: any;
  quantity: any;
  id: number;
  products: Product[];
  searchValue: any;

  cartItem: CartItem = new CartItem();




  ngOnInit(): void {
    //alert("from search by keyword")
    //alert(this.sharedService.getSearchValue())
    this.router.navigate([''])
    this.router.navigate(['search-by-keyword'])

    let keyword = this.sharedService.getSearchValue()
    //alert(keyword)
    this.searchService.searchByKeyword(keyword).subscribe(data => {
      this.data = data;
      //alert(JSON.stringify(data));
      //this.data = data;
    })
  }



  // addToCart(productInformation) {
  //   //create cart on page load for customer
  //   // alert(productInformation['productId'] + " " + productInformation['productName'] + " " + productInformation['productDescription'] + " " + this.id + " " + productInformation['unitPrice'])

  //   this.cartItem.cart.cartId = parseInt(sessionStorage.getItem('registeredCartId'));
  //   this.cartItem.product.productId = productInformation['productId'];
  //   this.cartItem.quantity = 1;

  //   //code to send data to database
  //   this.cartItemService.addToCart(this.cartItem).subscribe(data => {
  //     //alert(JSON.stringify(data))
  //   })

  // }

  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }
}
