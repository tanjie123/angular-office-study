import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  addCart(product) {
    this.items.push(product);
    window.alert("添加成功！")
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
