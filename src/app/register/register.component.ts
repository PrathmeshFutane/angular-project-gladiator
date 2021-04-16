import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNumber: number;
  address1: string;
  address2: string;

  register() {
    alert(this.confirmPassword + this.name + " " + this.email + this.password + this.mobileNumber + this.address1 + this.address2)
  }


}
