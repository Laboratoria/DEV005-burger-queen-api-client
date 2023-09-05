import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from '../models/products.interface';
import { Product } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  @Input ()orderItems: Product[] = [];

getOrderItems() {
  return this.orderItems;
}

clearOrder() {
  this.orderItems = [];
}



  // para pasar las ordenes a cocina
  private apiUrl = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }
  // Get order
  postOrder(): Observable<Order> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    console.log(this.http.get<Order>(direction, {headers: headers}))
    return this.http.post<Order>(direction, {headers: headers})
  }
}

