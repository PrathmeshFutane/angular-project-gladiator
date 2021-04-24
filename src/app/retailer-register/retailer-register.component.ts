import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Retailer } from '../appmodel/retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {

  retailer: Retailer = new Retailer();
  confirmPassword: string;


  constructor(private retailerService: RetailerService, private router: Router) { }


  ngOnInit(): void {
  }

  register() {
    if (this.retailer.password == this.confirmPassword) {
      //alert(JSON.stringify(this.retailer));
      this.retailerService.register(this.retailer).subscribe(response => {
        //alert(JSON.stringify(response));
        if (response.status == true) {
          Swal.fire(
            'welcome to webrash',
            'online shopping website',
            'success'
          )
          sessionStorage.setItem('retailerId', response.registeredRetailerId);
          this.router.navigate(['retailer']);
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'password doesnot match',
        text: 'try again'
      })
    }


  }
}
