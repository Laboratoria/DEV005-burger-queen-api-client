import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  token = '';
  @Input() emailInvalid: boolean;
  @Input() email: string;
  @Input() password: string;
  
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    
  ) { 
    this.email = '';
    this.password = '';
    this.emailInvalid = false;
  }

  ngOnInit() {
  }

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
    const { email, password } = this.getCredentials();
    this.authService.login(email, password)
    .subscribe(rta => {
      console.log(rta.accessToken);
      this.token = rta.accessToken;
      this.router.navigateByUrl('/waiter');
      this.getProfile();
    })
    if (!this.isValidEmail(this.email)) {
      this.emailInvalid = true;
    }
  }

  isValidEmail(email: string): boolean {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})$/;
    return regex.test(email);
  }

  getCredentials() {
    return {
      email: this.email,
      password: this.password 
    };
  }

  getProfile() {
    this.authService.profile(this.token)
    .subscribe(profile=> {
      console.log(profile)
    });
  }

}
