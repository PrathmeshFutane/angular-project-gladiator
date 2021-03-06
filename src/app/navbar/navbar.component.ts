import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
import { SearchByKeywordComponent } from '../search-by-keyword/search-by-keyword.component';
import { SearchService } from '../search.service';
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
  login: boolean = true;
  logout: boolean = false;
  dashboard: boolean = false;

  constructor(private http: HttpClient, private router: Router, private productService: AddProductService, private sharedService: SharedService, private searchService: SearchService) {
    console.log(this.data)
  }

  search() {
    console.log("from navbar")
    //alert(this.id)
    //alert(this.searchValue)
    this.sharedService.setSearchValue(this.searchValue);
    
    //stack overflow
    this.router.navigateByUrl('/search-by-keyword', { skipLocationChange: true }).then(() => {
      this.router.navigate(['search-by-keyword']);
    });    
   
    this.searchService.searchByKeyword(this.searchValue).subscribe(data => {
      //alert(JSON.stringify(data))
    })
  }

  clearData() {
    sessionStorage.clear();
    this.router.navigate([''])
    location.reload();
  }


  ngOnInit(): void {
    this.productService.displayAllData().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(data[0]['image'])
      if (sessionStorage.getItem('customerId') != undefined || sessionStorage.getItem('retailerId') != undefined || sessionStorage.getItem('adminId')) {
        this.login = false;
        this.logout = true;
        this.dashboard = true;
      }
      if (sessionStorage.getItem('retailerId')) {
        this.logout = true;
        this.login = false;
      }
      if (sessionStorage.getItem('adminId')) {
        this.logout = true;
        this.login = false;

      }
    })

  }




}
