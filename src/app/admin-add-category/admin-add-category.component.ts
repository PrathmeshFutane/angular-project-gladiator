import { Component, OnInit } from '@angular/core';
import { AddCategoryServiceService } from '../category-service.service';
import { Category } from '../appmodel/category';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {

  constructor(private addCategoryService: AddCategoryServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  category: Category = new Category();
  addProduct() {

    this.addCategoryService.addCategory(this.category).subscribe(response => {
      //alert(JSON.stringify(response));
      Swal.fire(
        'Category added Successfully',
        'largest website webrash',
        'success'
      )
      this.router.navigate(['admin-homepage'])
    })
  }
}
