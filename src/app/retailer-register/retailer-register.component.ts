import { Component, OnInit } from '@angular/core';
import { Retailer } from '../appmodel/retailer';

@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {

  retailer: Retailer = new Retailer();
  confirmPassword: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  register(){
    
  }
}
