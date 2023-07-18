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

  login(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return; 
    };
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
    .subscribe(response => {
      localStorage.setItem('token', response.accessToken)
      console.log(response.accessToken)

      this.worker = response.user.role;

      if(this.worker === 'admin'){
        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/waiter');
      }

    });
        
    }

 }  