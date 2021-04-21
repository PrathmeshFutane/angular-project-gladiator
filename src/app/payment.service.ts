import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Payment } from './appmodel/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  makePayment(payment : Payment): Observable<any> {
    let url = "http://localhost:8282/add-payment";
    return this.http.post(url, payment);

  }
}
