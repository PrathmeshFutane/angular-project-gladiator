import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isValidCustomer: boolean = false;
  customer: Customer = new Customer();
  OTP: number;

  constructor(private customerService: CustomerService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.customer.customerId = parseInt(sessionStorage.getItem('customerId'));
  }

  sendOTP() {

    this.customerService.sendOTP(this.customer).subscribe(data => {
      //alert(JSON.stringify(data))


      if (data['status']) {
        sessionStorage.setItem('customerIdForOTP', data['registeredCustomerId'])
        this.isValidCustomer = true;
        Swal.fire(
          'Check your email for OTP',
          'online shopping website',
          'success'
        )

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Email doesnot exist',
          text: 'Something went wrong!',
          footer: 'try again'
        })

      }
    })

  }

  checkOTP() {
    this.customerService.checkOTP(this.OTP).subscribe(data => {
      //alert(JSON.stringify(data))
      if (data['status']) {
        this.router.navigate(['new-password'])
        Swal.fire(
          'OTP Matched',
          'online shopping website',
          'success'
        )
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Email doesnot exist',
          text: 'Something went wrong!',
          footer: 'try again'
        })
      }
    })
  }



}
