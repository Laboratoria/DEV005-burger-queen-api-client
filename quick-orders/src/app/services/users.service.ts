import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para hacer peticiones
import { User, CreateUserDTO } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

 /*create(dto: CreateUserDTO) {
    return this.http.post<User>(`${this.apiURL}/users`, dto);
 }
 getAll(){
  return this.http.get<User[]>(`${this.apiURL}/users`);
 }*/

 profile() {
  return this.http.get<User[]>(`${this.apiURL}/users`);
}

}

