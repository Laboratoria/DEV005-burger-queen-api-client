import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  create(email: string, password: string, role: string) {
    const body = {
      email: email,
      password : password,
      role: role,
    }; 
    return this.http.post<User[]>(`${this.apiURL}/users`, body);
}


}

  
















