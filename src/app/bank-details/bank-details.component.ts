import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../appmodel/order';
import { Customer, Payment } from '../appmodel/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {


  payment: Payment = new Payment();

  constructor(private paymentService: PaymentService ,private router: Router) { }

  makePayment() {
    this.payment.customer.customerId = parseInt(sessionStorage.getItem('customerId'))
    this.payment.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'))
    //alert(this.payment.cardNumber +' ' + this.payment.expiryMonth +' '  + this.payment.expiryYear + this.payment.order.orderId + this.payment.cvv + this.payment.customer.customerId);
    this.paymentService.makePayment(this.payment).subscribe(data => {

      alert(JSON.stringify(data))
      this.router.navigate(['final-checkout'])
    })
    this.router.navigate(['final-checkout'])
  }

}
