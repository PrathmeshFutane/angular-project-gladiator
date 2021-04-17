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
export class RetailerHomepageComponent  {

  
  product: Product = new Product();
  id:number=this.product.categoryId;

 

  // ngOnInit(): void {
  //   let url = "https://fakestoreapi.com/products";
  //   this.http.get(url).subscribe(response => {
  //     this.data = response;
  //     console.log(response);
  //   })
  // }

  constructor(private productService: AddProductService, private router: Router) { }

  addProduct() {
    // alert(this.quantity + " " + this.id + " " + this.price + " " + this.productDetails + " " + this.name + " " + this.image)
    this.productService.addProduct(this.product).subscribe(response => {
      alert(JSON.stringify(response));
      // if (response.status == true) {
      //   sessionStorage.setItem('productId', response.registeredProductId);
      //   this.router.navigate(['login']);
      // }
    })
  }
}