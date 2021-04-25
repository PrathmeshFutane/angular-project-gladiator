import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
import { Retailer } from '../appmodel/retailer';

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  data: any;

  retailer: Retailer = new Retailer();
  ngOnInit(): void {

    this.adminService.fetchTotalRetailer().subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data
    })
    if (!sessionStorage.getItem('adminId')) {
      this.router.navigate(['admin'])
    }

  }
  //For Approve


  approve(info) {
    alert(JSON.stringify(info))
    this.adminService.adminApproveRetailer(info).subscribe(data => {
      //alert(JSON.stringify(data))
      Swal.fire(
        'Retailer Approved Successfully',
        'webrash',
        'success'
      )
    })
  }


  //For reject

  reject(info) {
    alert(JSON.stringify(info))
    this.adminService.adminRejectRetailer(info).subscribe(data => {
      //alert(JSON.stringify(data))
      Swal.fire(
        'Retailer Rejected Successfully',
        'webrash',
        'success'
      )
    })
  }



}
