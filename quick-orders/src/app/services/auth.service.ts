import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    const request = this.http.post<Auth>(`${this.apiURL}/login`, body);
    request.subscribe((rta) => {
      if(rta.status === 200) {
        localStorage.setItem('ACCESS_TOKEN', rta.accessToken);
      }
    });
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  profile(token:string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);
    headers = headers.set('Content-type', 'application/json');
    return this.http.get<User>(`${this.apiURL}/profile`, {
      headers
    });
  }
}

