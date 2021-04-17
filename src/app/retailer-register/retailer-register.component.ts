import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  register(){
    if (this.retailer.password == this.confirmPassword) {
      alert(JSON.stringify(this.retailer));
      this.retailerService.register(this.retailer).subscribe(response => {
        alert(JSON.stringify(response));
        if (response.status == true) {
          sessionStorage.setItem('retailerId', response.registeredRetailerId);
          this.router.navigate(['retailer']);
        }
      })
    } else {
      alert("password doesnot match")
    }
    
  }
}
