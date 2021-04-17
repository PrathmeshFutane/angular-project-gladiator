import { Component, OnInit } from '@angular/core';
import { Login } from '../appmodel/login';

@Component({
  selector: 'retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  constructor() { }

  login: Login = new Login();

  ngOnInit(): void {
  }

  email: string;
  password: string;
  rememberMe: string;

  loginCheck() {
    alert(this.email + " " + this.password)
  }

}
