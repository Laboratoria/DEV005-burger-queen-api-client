import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { 
    this.getDataFromAPI();
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }
  getDataFromAPI() {
    this.http
    .post('http://localhost:8080/login', {
      email: 'grace.hopper@systers.xyz',
      password: '123456',
    })
    .subscribe((data: any) => {
      const token = data.accesstoken;
      this.guardarToken(token);
    });
  }
 
}
