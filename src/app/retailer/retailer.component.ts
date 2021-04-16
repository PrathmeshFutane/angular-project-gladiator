import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string;
  password: string;
  rememberMe: string;

  login() {
    alert(this.email + " " + this.password)
  }

}
