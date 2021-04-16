import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string;
  password: string;
  rememberMe: boolean;

  login() {
    alert(this.email + " " + this.password + " " + this.rememberMe)
  }
}
