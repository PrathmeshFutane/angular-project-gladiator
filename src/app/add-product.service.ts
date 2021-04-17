import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './appmodel/product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) : Observable<any> {
    let url = "http://localhost:8282/product";
   return this.http.post(url, product); 
  }

  // picUpload(formData: FormData) : Observable<any> {
  //   let url = "http://localhost:8181/pic-upload";
  //  return this.http.post(url, formData); 
  // }
}