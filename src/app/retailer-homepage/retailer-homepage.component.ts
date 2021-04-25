import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { Product } from '../appmodel/product';
import { RetailerService } from '../retailer.service';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Retailer } from '../appmodel/retailer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retailer-homepage',
  templateUrl: './retailer-homepage.component.html',
  styleUrls: ['./retailer-homepage.component.css']
})
export class RetailerHomepageComponent implements OnInit {

  constructor(private modalService: NgbModal, private productService: AddProductService, private retailerService: RetailerService, private router: Router, private http: HttpClient) { }

  product: Product = new Product();
  data: any;
  id: number;
  productImage: any;//File;
  productId: any;//number
  info: any;
  closeResult: string = '';
  revenue: any;
  retailer: Retailer = new Retailer();
  ownerName = sessionStorage.getItem('retailerName');
  isApproved: boolean = false;



  ngOnInit() {
    let url = "http://localhost:8282/get-category";
    this.http.get(url).subscribe(response => {
      this.data = response;
      this.id = response['categoryId']
      console.log(response[0]['categoryId']);
      console.log("resp" + JSON.stringify(response))

    })
    if (sessionStorage.getItem('retailerId') == undefined || sessionStorage.getItem('retailerId') == null || sessionStorage.getItem('retailerId') == "" || sessionStorage.length == 0) {
      this.router.navigate(['retailer'])
    }
    this.productId = sessionStorage.getItem("registeredProductId")
    if (sessionStorage.getItem('approvalStatus') == "Y") {
      this.isApproved = true;
    }
  }




  // ngOnInit(): void {
  //   let url = "https://fakestoreapi.com/products";
  //   this.http.get(url).subscribe(response => {
  //     this.data = response;
  //     console.log(response);
  //   })
  // }



  onFileChange(event) {
    //console.log(event.target.files[0])
    this.productImage = event.target.files[0];
  }

  // add product to database
  addProduct() {
    let retailerId = sessionStorage.getItem("retailerId");
    this.product.retailer.retailerId = parseInt(retailerId);
    this.product.category.categoryId = this.id;
    console.log(retailerId + " " + this.product.category.categoryId)
    this.productService.addProduct(this.product).subscribe(response => {
      //alert(JSON.stringify(response));
      Swal.fire(
        'Product Added successfully',
        'largest online shopping website',
        'success'
      )
      sessionStorage.setItem('registeredProductId', response['registeredProductId'])
    })
  }


  // add image for uploaded image
  setImage() {
    let formData: FormData = new FormData();
    formData.append('productId', sessionStorage.getItem('registeredProductId'));
    formData.append('productImg', this.productImage);
    this.productService.imageUpload(formData).subscribe(data => {
      //alert(JSON.stringify(data))
      Swal.fire(
        'Images Added Successfully',
        'largest online shopping website',
        'success'
      )
    })
    //alert("image upload");
    location.reload();
  }

  getProductByRetailerId() {
    this.retailerService.getProductsByRetailerId(sessionStorage.getItem('retailerId')).subscribe(data => {
      //alert(JSON.stringify(data))
      this.data = data;
      console.log(data);
      alert(data['retailer']['ownerName'])
    })


  }



  //this is model for retailer revenue
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.retailerService.getProductsByRetailerId(sessionStorage.getItem('retailerId')).subscribe(data => {
      this.data = data;
      console.log(data)
      this.retailer.revenue = data[0]['retailer']['revenue']

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

  viewRetailerProfile(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });

    this.retailerService.viewRetailerProfile(sessionStorage.getItem('retailerId')).subscribe(data => {
      alert(JSON.stringify(data))
      this.data = data;

    })
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }









}