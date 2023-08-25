import { Injectable } from '@angular/core';
import { Credentials, LoginResponse } from '../models/login.interface';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, catchError, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  getToken(): string | null  {
    return localStorage.getItem('accesToken');
  }

  getRole(): string | null  {
    return localStorage.getItem('role');
  }

  loginByEmail(credentials: Credentials): Observable<LoginResponse> {
    const direction = this.apiUrl + 'login';
    return this.http.post<LoginResponse>(direction, credentials).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        return of(err.error);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    const direction = this.apiUrl + 'products';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    return this.http.get<Product[]>(direction, { headers: headers });
  }

}
