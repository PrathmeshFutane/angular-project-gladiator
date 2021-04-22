import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Retailer } from '../appmodel/retailer';

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {

  constructor(private adminService : AdminService) { }
  data : any;
  
  retailer : Retailer = new Retailer();
  ngOnInit(): void {
    this.retailer.retailerStatus = 'Y' ;
    this.retailer.retailerId = parseInt(sessionStorage.getItem('retailerId'));
    this.adminService.AdminApproveRetailer(this.retailer).subscribe(data=> {
      alert(data)
    })


  }

}
