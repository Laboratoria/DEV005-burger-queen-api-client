import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};*/

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { 
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http
    .post('http://localhost:8080/login', {
      email: 'grace.hopper@systers.xyz',
      password: '123456',
    })
    .subscribe((data: any) => {
      console.log(data);
    });
  }
}
