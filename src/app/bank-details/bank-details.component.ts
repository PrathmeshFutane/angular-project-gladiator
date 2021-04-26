import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Payment } from '../appmodel/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {


  payment: Payment = new Payment();

  constructor(private paymentService: PaymentService, private router: Router) { }

  makePayment() {


    // Swal.fire({
    //   title: 'Payment Successfull',
    //   text: 'Order Details is sent to your email id',
    //   imageUrl: 'https://media3.giphy.com/media/ddGZulOVHKMeekaHrn/giphy.gif',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image',
    // })
    // this.router.navigate(['success'])



    this.payment.customer.customerId = parseInt(sessionStorage.getItem('customerId'))
    this.payment.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'))
    //alert(this.payment.cardNumber +' ' + this.payment.expiryMonth +' '  + this.payment.expiryYear + this.payment.order.orderId + this.payment.cvv + this.payment.customer.customerId);
    this.paymentService.makePayment(this.payment).subscribe(data => {

      //alert(JSON.stringify(data))
      Swal.fire({
        title: 'Payment Successfull',
        text: 'Order Details is sent to your email id',
        imageUrl: 'https://media3.giphy.com/media/ddGZulOVHKMeekaHrn/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.router.navigate(['success'])
    })

  }

}
