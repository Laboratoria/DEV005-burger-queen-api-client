import { Injectable } from '@angular/core';
import { Credentials, LoginResponse } from '../models/login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('accesToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getId(): string | null {
    const id = localStorage.getItem('id');
    console.log(id, 'VALOR DE ID');
    return id;
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
}
