import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  categoryId: any;
  searchValue: any;
  keyword: any;

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

  setKeywordValue(keyword) {
    this.keyword = keyword;
  }

  getKeyword() {
    return this.searchValue;
  }
}
