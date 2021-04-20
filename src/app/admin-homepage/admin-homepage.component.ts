import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import {Admin} from '../appmodel/admin';
import {AdminService} from '../admin.service';


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
  data: any;

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.adminId = parseInt(sessionStorage.getItem('adminId'));
    this.adminService.fetchPersonalInformation(this.adminId).subscribe(response => {
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


