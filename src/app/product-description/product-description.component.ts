import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  data: any;



  ngOnInit(): void {
    this.data = this.sharedService.getProductDescription();
    

  }



}
