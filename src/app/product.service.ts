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
}