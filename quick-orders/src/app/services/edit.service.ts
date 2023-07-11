import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para hacer peticiones
import { User, CreateUserDTO } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  /*edit(id:number) {
    return this.http.patch<User>(`${this.apiURL}/users`,id);
  }*/
}







