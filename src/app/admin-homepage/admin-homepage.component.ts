import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { Admin } from '../appmodel/admin';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {

  //constructor(private http: HttpClient, private router: Router) { }

  closeResult = '';

  constructor(private modalService: NgbModal, private adminService: AdminService) { }

  adminId: number;
  admin: Admin = new Admin();



   
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
  openTotalCustomer(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonCustomer(reason)}`;
    });

    // this is to get the admin information
    this.adminId = parseInt(sessionStorage.getItem('adminId'));
    this.adminService.fetchProfile(this.adminId).subscribe(response => {
      this.admin = response;
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
  openTotalRetailer(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonRetailer(reason)}`;
    });

    // this is to get the admin information
    this.adminId = parseInt(sessionStorage.getItem('adminId'));
    this.adminService.fetchProfile(this.adminId).subscribe(response => {
      this.admin = response;
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


