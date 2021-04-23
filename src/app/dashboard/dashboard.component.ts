import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../appmodel/cart';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  closeResult = '';

  ngOnInit() {
    this.customerName = sessionStorage.getItem('customerName')
    alert(this.customerName)
  }

  constructor(private modalService: NgbModal, private customerService: CustomerService) { }

  customerId: number;
  customer: Customer = new Customer();
  data: any;
  customerName: string;

  //below code is for open model
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.customerService.fetchProfile(this.customerId).subscribe(response => {
      this.data = response;

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
