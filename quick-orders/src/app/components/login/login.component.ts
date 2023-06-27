import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Auth } from "src/app/models/auth.model";
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  token = '';
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

  createUser(){
    this.usersService.create({
      email: 'jackeline@gmail.com',
      password: '333777',
      rol: 'waiter',
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  /*switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }*/

  login(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return; 
    };
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
    .subscribe(response => {
      this.token = response.accessToken;
      const result = response.role;
      console.log(result)
      this.getProfile();
    });
    this.router.navigateByUrl('/waiter');
    }

    getProfile(){
      this.authService.profile(this.token)
      .subscribe(profile => {
        console.log(profile)
      })
    }
  }

  