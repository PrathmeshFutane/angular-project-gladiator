import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './appmodel/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  createCart(cart: Cart) {
    let url = "http://localhost:8282/add-cart";
    return this.http.post(url, cart);
  }
}
