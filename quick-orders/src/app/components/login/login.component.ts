import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      email: 'prueba@gmail.com',
      password: '333777'
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  login(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return; 
    };
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
    this.router.navigateByUrl('/waiter');
    }
  }
