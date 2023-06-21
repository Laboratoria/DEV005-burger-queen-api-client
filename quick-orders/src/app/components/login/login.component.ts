import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";

/*const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient) {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http
      .post('http://localhost:8080/login', {
        email: 'grace.hopper@systers.xyz',
        password: '123456',
      })
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}

