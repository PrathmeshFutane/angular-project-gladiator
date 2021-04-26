import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Order } from '../appmodel/order';
import { OrderItem } from '../appmodel/orderItem';
import { CheckoutService } from '../checkout.service';
import { OrderItemService } from '../order-item.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private orderService: OrderService, private checkoutService: CheckoutService, private modalService: NgbModal) { }

  data: any;

  order: Order = new Order();

  orderItem: OrderItem = new OrderItem();
  orderId = parseInt(sessionStorage.getItem('registeredOrderId'))
  closeResult = "";

  ngOnInit(): void {
    this.orderItem.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.checkoutService.getAllOrderItem(this.orderItem).subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
      console.log(data)
    })
  }

  cancelOrder() {
    //alert("this is cancel");
    this.order.orderId = parseInt(sessionStorage.getItem('registeredOrderId'));
    this.orderService.cancelOrder(this.order).subscribe(data => {
      //alert(JSON.stringify(data));
      Swal.fire(
        'Your Order is cancelled',
        'largest online shopping website',
        'success'
      )
      this.router.navigate([''])
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
      //alert(JSON.stringify(data))
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
