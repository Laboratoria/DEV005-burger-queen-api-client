import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: ServicesService) { }


  canActivate(): boolean {
    const userRole = this.authService.getRole();
    if (userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}

  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
