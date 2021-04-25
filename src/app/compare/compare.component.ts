import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  isDataLoaded: boolean = false;
  constructor(private router: Router, private sharedService: SharedService) { }
  data: any;
  products: any;

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem('myCompare'));
    if (this.data[0]['productId']) {
      this.isDataLoaded = true;
    }
    console.log(this.products);
  }

  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }



}
