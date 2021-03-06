import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Customer } from '../appmodel/customer';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  constructor(private modalService: NgbModal, private customerService: CustomerService, private orderService: OrderService, private sharedService: SharedService, private router: Router) { }

  customerId: number;
  customer: Customer = new Customer();
  data: any;
  customerName: string;
  //srNo:number=1;

  ngOnInit(): void {
    //alert("this is view order");
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.orderService.displayAllOrders(this.customerId).subscribe(data => {
      //alert(JSON.stringify(data));
      Swal.fire(
        'Your Orders',
        'largest shopping website',
        'success'
      )
      this.data = data;
      console.log(JSON.stringify(data) + "This is my order");
    })
  }

  getOrderItems(info) {
    this.orderService.displayOrderItems(info['orderId']).subscribe(data => {
      //alert(JSON.stringify(data));
      this.sharedService.setViewOrderItems(data);
      this.router.navigate(['view-order-item']);
      Swal.fire(
        'Your Orders Items',
        'largest shopping website',
        'success'
      )
    })
  }
}
