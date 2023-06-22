import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }
  
  getAllProducts() {
    this.http
    .get<[]>('http://localhost:8080/products')
  }

}
