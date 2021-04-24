import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  categoryId: any;
  searchValue: any;
  keyword: any;
  dataForSearching: any;
  productDescription: any;
  wishlist: any;
  viewOrderItems: any;

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

  setDataForSearching(dataForSearching) {
    this.dataForSearching = dataForSearching;
  }

  getDataForSearching() {
    return this.dataForSearching
  }

  setProductDescription(productDescription) {
    this.productDescription = productDescription
  }

  getProductDescription() {
    return this.productDescription;
  }

  setWishlist(wishlist) {
    this.wishlist = wishlist
  }

  getWishlist() {
    return this.wishlist;
  }

  setViewOrderItems(viewOrderItems){
    this.viewOrderItems = viewOrderItems
   }

   getViewOrderItems(){
     return this.viewOrderItems;
   }
}
