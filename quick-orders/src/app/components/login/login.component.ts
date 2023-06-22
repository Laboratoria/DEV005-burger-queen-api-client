import { Component } from "@angular/core";
import { StoreService } from "src/app/services/store.service";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
  ) { }

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
    this.authService.login('grace.hopper@systers.xyz', '123456')
    .subscribe(rta => {
      console.log(rta.accessToken);
      // localStorage(rta.accessToken)
      this.router.navigateByUrl('/waiter');
      
    })
  }

  getProfile(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-type', 'application/json');
  }

}

/*constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const datosUsuario = params.get('datosUsuario');
    // Utiliza los datos del usuario según sea necesario
  });
}*/