import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../appmodel/category';
import { AddCategoryServiceService } from '../category-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router, private categoryService: AddCategoryServiceService, private sharedService: SharedService) { }
  data: any;

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(data => {
      this.data = data;
      console.log(data)
    })
  }

  // get all products by category

  getProductById(information) {
    alert(information['categoryId'])
    this.sharedService.setCategoryId(information['categoryId'])
    this.router.navigate(['search-result'])

  }

}
