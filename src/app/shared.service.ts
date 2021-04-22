import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  categoryId: any;
  searchValue: any;

  setSearchValue(searchValue) {
    this.searchValue = searchValue
  }

  getSearchValue() {
    return this.searchValue;
  }

  setCategoryId(categoryId) {
    this.categoryId = categoryId;
  }

  getCategoryId() {
    return this.categoryId;
  }
}
