import { Component, OnInit } from '@angular/core';
import { AddCategoryServiceService } from '../add-category-service.service';
import { Category } from '../appmodel/category';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {

  constructor(private addCategoryService: AddCategoryServiceService) { }

  ngOnInit(): void {
  }

  // category: Category = new Category();
  // addProduct() {
  //   alert(this.category)
  //   this.addCategoryService.addCategory(this.category).subscribe(response => {
  //     alert(JSON.stringify(response));
  //   })
  // }
}
