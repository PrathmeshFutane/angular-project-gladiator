import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './appmodel/product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<any> {
    console.log(product)
    let url = "http://localhost:8282/add-product";
    return this.http.post(url, product);
  }

  imageUpload(formData: FormData): Observable<any> {
    let url = "http://localhost:8282/upload-image";
    return this.http.post(url, formData);
  }

  displayAllData() {
    let url = "http://localhost:8282/all-products";
    return this.http.get(url);
  }

  getAllQuantity() {
    let url = "http://localhost:8282/get-quantity";
    return this.http.get(url);
  }

  filter500to1000() {
    let url = "http://localhost:8282/product-filter?price1=500&price2=1000"
    return this.http.get(url);
  }

  filter5000to10000() {
    let url = "http://localhost:8282/product-filter?price1=5000&price2=10000"
    return this.http.get(url);
  }

  //code for sorting

  ascendingOrder(){
    let url = "http://localhost:8282/ascending-order"
    return this.http.get(url);
  }

  descendingOrder(){
    let url = "http://localhost:8282/descending-order"
    return this.http.get(url);
  }




}