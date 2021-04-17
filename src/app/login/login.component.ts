import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message: string;
  rememberMe: boolean;

  constructor(private customerService: CustomerService, private router: Router) { }

  loginCheck() {
    console.log(this.login);
    this.customerService.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      if (response.status == true) {
        let customerId = response.customerId;
        let customerName = response.name;
        sessionStorage.setItem('customerId', String(customerId));
        sessionStorage.setItem('customerName', customerName);
        this.router.navigate(['dashboard']);
      }
      else
        this.message = response.message;
    })
  }

}
