import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  password: string;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customer.customerId = parseInt(sessionStorage.getItem('customerIdForOTP'));
  }

  updatePassword() {
    //alert(this.password + "    " + this.customer.password)
    if (this.password === this.customer.password) {
      this.customerService.updatePassword(this.customer).subscribe(data => {
        Swal.fire(
          'Password updated successfully',
          'online shopping website',
          'success'
        )
        this.router.navigate([''])
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'password doesnot match',
        text: 'Something went wrong!',
        footer: 'try again'
      })
    }
  }

}
