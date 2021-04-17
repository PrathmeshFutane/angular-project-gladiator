import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { Retailer } from './appmodel/retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  
  constructor(private http: HttpClient) { }

  register(retailer: Retailer) : Observable<any> {
    let url = "http://localhost:8282/retailer";
   return this.http.post(url, retailer); 
  }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8282/retailerlogin";
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
}
