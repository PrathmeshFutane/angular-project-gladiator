import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../add-product.service';
import { Product } from '../appmodel/product';

@Component({
  selector: 'app-retailer-homepage',
  templateUrl: './retailer-homepage.component.html',
  styleUrls: ['./retailer-homepage.component.css']
})
export class RetailerHomepageComponent implements OnInit {

  constructor(private productService: AddProductService, private router: Router, private http: HttpClient) { }

  product: Product = new Product();
  data: any;
  id: number;



  ngOnInit() {
    let url = "http://localhost:8282/getAllCategory";
    this.http.get(url).subscribe(response => {
      this.data = response;
      this.id = response['categoryId']
      console.log(response[0]['categoryId']);
    })
  }




  // ngOnInit(): void {
  //   let url = "https://fakestoreapi.com/products";
  //   this.http.get(url).subscribe(response => {
  //     this.data = response;
  //     console.log(response);
  //   })
  // }



  addProduct() {
    let retailerId = sessionStorage.getItem("retailerId");
    this.product.retailer.retailerId = parseInt(retailerId);
    this.product.category.categoryId = this.id;
    this.productService.addProduct(this.product).subscribe(response => {
      alert(JSON.stringify(response));

    })
  }

  // setImage() {
  //   this.productService.addProduct()
  // }


}