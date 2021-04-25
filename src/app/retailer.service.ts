import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './appmodel/cartItem';
import { Login } from './appmodel/login';
import { Retailer } from './appmodel/retailer';

@Injectable({
  providedIn: 'root'
})

export class RetailerService {

  constructor(private http: HttpClient) { }

  register(retailer: Retailer): Observable<any> {
    let url = "http://localhost:8282/register-retailer";
    return this.http.post(url, retailer);
  }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8282/login-retailer";
    return this.http.post(url, login);
  }

  // picUpload(formData: FormData) : Observable<any> {
  //   let url = "http://localhost:8181/pic-upload";
  //  return this.http.post(url, formData); 
  // }

  // fetchProfile(id: number) : Observable<Customer> {
  //   let url = "http://localhost:8181/profile?customerId="+id;
  //  return this.http.get<Customer>(url); 
  // }

  //made change
  getProductsByRetailerId(retailerId) {
    let url = "http://localhost:8282/get-products-by-retailer?retailerId=" + retailerId;
    return this.http.get(url);
  }

  updateProductStock(product: Product): Observable<any> {
    let url = "http://localhost:8282/update-stock";
    return this.http.post(url, product);
  }

  viewRetailerProfile(retailerId): Observable<any> {
    let url = "http://localhost:8282/retailer-profile?retailerId=" + retailerId;
    return this.http.get(url);
  }

  }
