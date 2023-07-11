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

//Traer todos los usuarios
 allUsers() {
  return this.http.get<User[]>(`${this.apiURL}/users`);
}

// Traer solo un usuario
getOneUser(id:number) {
  return this.http.get<User>(`${this.apiURL}/users/${id}`);
}

// Crear usuarios
create(email: string, password: string, role: string) {
  const body = {
    email: email,
    password : password,
    role: role,
  }; 
  return this.http.post<User[]>(`${this.apiURL}/users`, body);
}

// Editar usuario
edit(id:number, email: string, password: string, role: string) {
  const body = {
    email: email,
    password : password,
    role: role,
  }; 
  return this.http.patch<User>(`${this.apiURL}/users/${id}`, body);
}
// Eliminar usuario
delete(id:number) {
  return this.http.delete<User>(`${this.apiURL}/users/${id}`);
}

}

