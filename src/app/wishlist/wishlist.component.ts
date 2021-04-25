import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) { }
  data: any;
  products: any;
  isDataLoaded: boolean = false;

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('wishlist'));
    console.log(this.products);
  }

  productDescription(information) {
    this.sharedService.setProductDescription(information)
    this.router.navigate(['product-description'])
  }



}
