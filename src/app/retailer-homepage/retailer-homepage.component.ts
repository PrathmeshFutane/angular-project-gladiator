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
  productImage: any;//File;
  productId: any;//number



  ngOnInit() {
    let url = "http://localhost:8282/getcategory";
    this.http.get(url).subscribe(response => {
      this.data = response;
      this.id = response['categoryId']
      console.log(response[0]['categoryId']);
    })
    // if (sessionStorage.getItem('retailerId') == undefined || sessionStorage.getItem('retailerId') == null || sessionStorage.getItem('retailerId') == "" || sessionStorage.length == 0) {
    //   this.router.navigate(['retailer'])
    // }
    this.productId = sessionStorage.getItem("registeredProductId")
  }




  // ngOnInit(): void {
  //   let url = "https://fakestoreapi.com/products";
  //   this.http.get(url).subscribe(response => {
  //     this.data = response;
  //     console.log(response);
  //   })
  // }



  onFileChange(event) {
    this.productImage = event.target.files[0];
  }

  // add product to database
  addProduct() {
    let retailerId = sessionStorage.getItem("retailerId");
    this.product.retailer.retailerId = parseInt(retailerId);
    this.product.category.categoryId = this.id;
    console.log(retailerId + " " + this.product.category.categoryId)
    this.productService.addProduct(this.product).subscribe(response => {
      alert(JSON.stringify(response));
      sessionStorage.setItem('registeredProductId', response['registeredProductId'])
    })
  }


  // add image for uploaded image
  setImage() {
    let formData: FormData = new FormData();
    formData.append('registeredProductId', sessionStorage.getItem('registeredProductId'));
    formData.append('profilePic', this.productImage);
    this.productService.imageUpload(formData).subscribe(data => {
      alert(JSON.stringify(data))
    })
    alert("image upload");
  }


}