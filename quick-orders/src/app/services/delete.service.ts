import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private apiURL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  delete() {
    return this.http.delete<User[]>(`${this.apiURL}/users`);
  }

}

