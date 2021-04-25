import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent {

  closeResult = '';

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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





  profilePic: any;

  onFileChange(event) {
    this.profilePic = event.target.files[0];
    console.log(this.profilePic);
  }

  upload() {
    console.log(this.profilePic)
  }







  data: Array<any> = new Array<any>();
  totalRecord: string;
  page: number = 1;


  getData() {
    this.http.get("https://randomuser.me/api/?results=100").subscribe(data => {
      alert(JSON.stringify(data))
      //console.log(JSON.stringify(data))
      console.log(this.data = data['results']);
      console.log(this.data)
      console.log(this.totalRecord = data['results'].length);
    })
  }





















}
