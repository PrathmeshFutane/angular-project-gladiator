import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private checkoutService: CheckoutService, private modalService : NgbModal ) { }

  data: any;


  orderItem: OrderItem = new OrderItem();
  closeResult = "";

  ngOnInit(): void {
    this.orderItem.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkoutService.getAllOrderItem(this.orderItem).subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;
    })
  }





  //below code is for cancellation
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    let orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkoutService.cancelOrder(orderId).subscribe(data => {
      alert(JSON.stringify(data))
    })
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
