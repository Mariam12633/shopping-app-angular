import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  addToCart(productId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart/add`, { productId });
  }
}