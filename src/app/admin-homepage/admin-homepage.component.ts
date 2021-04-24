import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../appmodel/admin';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {



  closeResult = '';

  constructor(private router: Router, private modalService: NgbModal, private adminService: AdminService) { }

  ngOnInit() {
    if (sessionStorage.getItem('adminId') == undefined || sessionStorage.getItem('adminId') == null || sessionStorage.getItem('adminId') == "") {
      this.router.navigate(['admin'])
    }
  }

  adminId: number;
  admin: Admin = new Admin();

  customerData: any;
  retailerData: any;




  //  This is model for profile
  openProfile(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    // this is to get the admin information
    this.adminId = parseInt(sessionStorage.getItem('adminId'));
    this.adminService.fetchProfile(this.adminId).subscribe(response => {
      console.log(response);
      this.admin = response;
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



  // This is for all Customer 
  openTotalCustomer(customer) {
    this.modalService.open(customer, { ariaLabelledBy: 'model-for-customer' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonCustomer(reason)}`;
    });

    // this is to get the total customer information

    this.adminService.fetchTotalCustomer().subscribe(response => {
      this.customerData = response;
    })

  }

  private getDismissReasonCustomer(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  //  This is for Total Retailer 
  openTotalRetailer(retailer) {
    this.modalService.open(retailer, { ariaLabelledBy: 'modal-for-retailer' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonRetailer(reason)}`;
    });

    // this is to get the admin information

    this.adminService.fetchTotalRetailer().subscribe(response => {
      this.retailerData = response;
    })

  }

  private getDismissReasonRetailer(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }













}


