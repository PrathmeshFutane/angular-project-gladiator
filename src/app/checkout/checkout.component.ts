import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  data: any;
  message: any;
  mycartobj = [];
  quantity: number = 1;

  ngOnInit(): void {
    let url = "https://fakestoreapi.com/products";
    this.http.get(url).subscribe(response => {
      this.data = response;
      console.log(response);
    })
  }

}
