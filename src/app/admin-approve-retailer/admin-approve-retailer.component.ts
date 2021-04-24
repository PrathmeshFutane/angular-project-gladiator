import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Retailer } from '../appmodel/retailer';

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  data: any;

  retailer: Retailer = new Retailer();
  ngOnInit(): void {
   
   this.adminService.fetchTotalRetailer().subscribe(data=> {
     alert(JSON.stringify(data))
     this.data=data
   })

  }
//For Approve


  approve(info) {
    alert(JSON.stringify(info))
    this.adminService.adminApproveRetailer(info).subscribe(data=> {
      alert(JSON.stringify(data))
    })
  }


  //For reject

  reject(info){
    alert(JSON.stringify(info))
    this.adminService.adminRejectRetailer(info).subscribe(data=> {
      alert(JSON.stringify(data))
    })
  }



}
