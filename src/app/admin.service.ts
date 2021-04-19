import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8282/admin-login";
    return this.http.post(url, login);  
  }
}