import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './appmodel/admin';
import { Customer } from './appmodel/customer';
import { Login } from './appmodel/login';
import { Retailer } from './appmodel/retailer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8282/admin-login";
    return this.http.post(url, login);
  }

  fetchProfile(id: number): Observable<Admin> {
    let url = "http://localhost:8282/admin-profile?adminId=" + id;
    return this.http.get<Admin>(url);
  }


  fetchTotalCustomer( ) : Observable<Customer>  {
    let url = "http://localhost:8282/admin-get-total-customer";
    return this.http.get<Customer>(url);
  }

  fetchTotalRetailer() : Observable<Retailer> {
    let url ="http://localhost:8282/admin-get-total-retailer";
    return this.http.get<Retailer>(url);
  }









}
