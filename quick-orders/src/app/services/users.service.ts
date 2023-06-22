import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para hacer peticiones
import { User, CreateUserDTO } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

 create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiURL, dto);
 }
 getAll(){
  return this.http.get<User[]>(this.apiURL);
 }

}
