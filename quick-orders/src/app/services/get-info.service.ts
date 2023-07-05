import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para hacer peticiones
import { User, CreateUserDTO } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor() { }
}
