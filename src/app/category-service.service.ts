import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './appmodel/category';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryServiceService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<any> {
    let url = "http://localhost:8282/add-category";
    return this.http.post(url, category);
  }


  getAllCategory() {
    let url = "http://localhost:8282/get-category";
    return this.http.get(url);
  }


  getProductsByCategory(categoryId) {
    let url = "http://localhost:8282/get-products-by-category?categoryId=" + categoryId;
    return this.http.get(url);
  }


}

