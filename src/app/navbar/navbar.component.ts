import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../product.service';
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





  constructor(private http: HttpClient, private router: Router, private productService: AddProductService, private sharedService: SharedService, private searchService: SearchService) {
    console.log(this.data)
  }



  search() {
    //alert(this.id)
    this.router.navigate([''])
    this.router.navigate(['search-by-keyword'])
    alert(this.searchValue)
    this.sharedService.setSearchValue(this.searchValue);
    this.sharedService.setKeywordValue(this.searchValue);
    this.router.navigate(['search-by-keyword'])
    this.searchService.searchByKeyword(this.searchValue).subscribe(data => {
      alert(JSON.stringify(data))
    })

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
