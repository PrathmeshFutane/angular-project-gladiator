import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-homepage',
  templateUrl: './retailer-homepage.component.html',
  styleUrls: ['./retailer-homepage.component.css']
})
export class RetailerHomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  id: number;
  price: number;
  productDetails: string;
  name: string;
  image: string;
  quantity: number;
  categoryName: string;

  data: any;

  ngOnInit(): void {
    let url = "https://fakestoreapi.com/products";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }

  addProduct() {
    alert(this.quantity + " " + this.id + " " + this.price + " " + this.productDetails + " " + this.name + " " + this.image)
  }




}
