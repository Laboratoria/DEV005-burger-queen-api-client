import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Product } from '../models/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const direction = this.apiUrl + 'products';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    return this.http.get<Product[]>(direction, { headers: headers });
  }
}
