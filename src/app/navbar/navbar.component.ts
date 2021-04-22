import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchValue: string;
  data: any;
  id: number;



  constructor(private http: HttpClient, private router: Router, private productService: AddProductService, private sharedService: SharedService) {
    console.log(this.data)
  }



  search() {
    //alert(this.id)
    alert(this.searchValue)
    this.sharedService.setSearchValue(this.searchValue);

  }

  clearData() {
    sessionStorage.clear();
    this.router.navigate([''])
  }



  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
    })
  }




}
