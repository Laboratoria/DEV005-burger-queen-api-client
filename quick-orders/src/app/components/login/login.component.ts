import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  token = '';
  worker = '';
  
  authForm: FormGroup;
  isSubmitted  =  false;
  
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    
  ) { this.authForm  =  this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}

  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  get formControls() { return this.authForm.controls; }

  /*createUser(){
    this.usersService.create({
      email: 'jackeline@gmail.com',
      password: '333777',
      rol: 'waiter',
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }*/


  login(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return; 
    };
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
    .subscribe(response => {
      localStorage.setItem('token', response.accessToken)
      console.log(response.accessToken)
      //const tokenGuardado = localStorage.getItem('token');

      // Verificar si se encontró un token en el almacenamiento local
      /*if (tokenGuardado) {
      console.log("Token encontrado:", tokenGuardado);
      } else {
      console.log("No se encontró ningún token en el almacenamiento local.");
      }*/

      // this.token = response.accessToken;
      this.worker = response.user.role;

      if(this.worker === 'admin'){
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/waiter');
      }

      /*this.authService.profile(this.token)
        .subscribe(profile => {
            this.data = profile[0]
            console.log(this.data)
            })*/
    });
    
    }

 }  