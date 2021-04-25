import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, Product } from '../appmodel/cartItem';
import { CartItemService } from '../cart-item.service';
import { AddProductService } from '../product.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cartItemService: CartItemService, private productService: AddProductService, private sharedService: SharedService) { }


  data: any;
  quantity: any;
  id: number;
  products: Product[];
  searchValue: any;
  obj = [];
  obj2 = [];
  page: number = 1;
  totalProducts: string;

  cartItem: CartItem = new CartItem();

  ngOnInit() {
    // this.productService.displayAllData().subscribe(data => {
    //   console.log(data);
    //   // $scope.users = data.users.slice(5, 11);
    //   this.data = data[Math.floor(Math.random() * data["productName"].length)];
    //   console.log(data[0]['image'])
    // })

    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      // this.totalProducts = data
      //console.log(data[0]['image'])
      // console.log(datalength)
      console.log("this " + data['length'])
      this.totalProducts = data['length']
    })
  }


  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }
}
