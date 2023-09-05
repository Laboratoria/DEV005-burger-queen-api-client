import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';

import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public incorrectCredentials = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  public formSubmitted = false;

  constructor(private auth: UserService, private router: Router) { }

  // crear aquí función para redirigir
  redirectByRole(role: string) {
    if (role === 'admin'){
      this.router.navigate(['admin-component']);
    } else if(role === 'waiter') {
      this.router.navigate(['waiter-component']);
    } else if(role === 'cook') {
      this.router.navigate(['cook-component']);
    }
  }

  showPasswordMessage() {
    const password = this.loginForm.get('password');
    const conditionToShowMessage = password?.invalid && this.formSubmitted;
    return conditionToShowMessage;
  }

  onLogin(credentials: Credentials) {
    this.formSubmitted = true;
    //Suscribe indica qué se hace una vez que la respuesta es correcta
    this.auth.loginByEmail(credentials)
    .subscribe((response) => {
      if (typeof response === 'string') {
        this.incorrectCredentials = 'Credenciales Incorrectas';
      } else {
        console.log(response);
        localStorage.setItem('accesToken', response.accessToken);
        localStorage.setItem('role', response.user.role);
        localStorage.setItem('id', response.user.id.toString());

        this.redirectByRole(response.user.role);
      }
    })
  }
}
