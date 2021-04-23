import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './appmodel/customer';
import { Login } from './appmodel/login';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  register(customer: Customer): Observable<any> {
    let url = "http://localhost:8282/register";
    return this.http.post(url, customer);
  }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8282/login";
    return this.http.post(url, login);
  }




  // picUpload(formData: FormData): Observable<any> {
  //   let url = "http://localhost:8181/pic-upload";
  //   return this.http.post(url, formData);
  // }

  // fetchProfile(id: number): Observable<Customer> {
  //   let url = "http://localhost:8181/profile?customerId=" + id;
  //   return this.http.get<Customer>(url);
  // }

  fetchProfile(id: number): Observable<Customer> {
    let url = "http://localhost:8282/customer-profile?customerId=" + id;
    return this.http.get<Customer>(url);
  }


  updateProfile(customer: Customer) {
    let url = "http://localhost:8282/update-customer";
    return this.http.post(url, customer);
  }

}
