import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { UserService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: UserService) { }

  canActivate(): boolean {
    const accessToken = this.authService.getToken();
    if (accessToken) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }

    // const userRole = this.authService.getRole();

    // if(accessToken && userRole === 'admin'){
    //   return true;
    // } else if (accessToken && userRole === 'cook') {
    //   return true
    // } else if (accessToken && userRole == 'waiter') {
    //   return true
    // } else {
    //   this.router.navigate(['']);
    //   return false;
    // }
  }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot,
  //   ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   |boolean | UrlTree {
  //   return true;
  // }

}
