import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;

  ngOnInit(): void {
    let url = "https://fakestoreapi.com/products";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }
}
