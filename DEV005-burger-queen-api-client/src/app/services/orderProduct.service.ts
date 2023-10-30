import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewOrder, ProcessedOrder, RPOrder, ResponseOrder } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://127.0.0.1:8080/';
  private pollingInterval = 20000;

  constructor(private http: HttpClient) { }
  // Get order
  postOrder(data: NewOrder): Observable<ResponseOrder> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    const orderInfo =  data;
    const options = { headers: headers };

    return this.http.post<ResponseOrder>(direction, orderInfo, options);
  }
  // enviar pasar las ordenes a cocina

  getOrders(): Observable<RPOrder[]> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    const options = {headers: headers};

    return timer(0, this.pollingInterval).pipe(
      switchMap(() => this.http.get<RPOrder[]>(direction, options))
    );
  }

  processOrder(id: number): Observable<ProcessedOrder> {
    const direction = this.apiUrl + `orders/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    const orderInfo = {
      status: 'ready',
      dateProcessed: new Date(),
    }
    const options = { headers: headers };
    return this.http.patch<ProcessedOrder>(direction, orderInfo, options);
  }

  getOrdersReady(): Observable<ProcessedOrder[]> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    const options = {headers: headers};

    return timer(0, this.pollingInterval).pipe(
      switchMap(() => this.http.get<ProcessedOrder[]>(direction, options))
    );
  }

}

