import { Component, OnInit } from '@angular/core';
import { Login } from '../appmodel/login';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  login: Login = new Login();

  ngOnInit(): void {
  }

  email: string;
  password: string;
  rememberMe: boolean;

  loginCheck() {
    alert(this.email + " " + this.password + " " + this.rememberMe)
  }
}
