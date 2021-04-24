import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-order-item',
  templateUrl: './view-order-item.component.html',
  styleUrls: ['./view-order-item.component.css']
})
export class ViewOrderItemComponent implements OnInit {

  constructor(private sharedService: SharedService,private router: Router) { }

  data: any;
  orderId: number;

  ngOnInit(): void {
    this.data = this.sharedService.getViewOrderItems();
    alert(JSON.stringify(this.data));
    this.orderId = this.data[0]['order']['orderId'];
    alert(this.orderId);
  }


  makePayment(){
    alert(this.orderId);
    sessionStorage.setItem('registeredOrderId',String(this.orderId));
    this.router.navigate(['payment']);

  }

}
