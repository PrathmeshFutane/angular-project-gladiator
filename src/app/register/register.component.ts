import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  customer: Customer = new Customer();
  confirmPassword: string;

  constructor(private customerService: CustomerService, private router: Router) { }

  register() {
    alert(JSON.stringify(this.customer));
    this.customerService.register(this.customer).subscribe(response => {
      alert(JSON.stringify(response));
      if (response.status == true) {
        sessionStorage.setItem('customerId', response.registeredCustomerId);
        this.router.navigate(['login']);
      }
    })
  }


}
