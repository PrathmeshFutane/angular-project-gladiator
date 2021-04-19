import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './appmodel/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http: HttpClient) { }

  addToCart(cartItem: CartItem): Observable<any> {
    let url = "http://localhost:8282/cart-item";
    return this.http.post(url, cartItem);
  }

  getAllCartItem() {
    let url = "http://localhost:8282/get-all-cart-item";
    return this.http.get(url);
  }
}
