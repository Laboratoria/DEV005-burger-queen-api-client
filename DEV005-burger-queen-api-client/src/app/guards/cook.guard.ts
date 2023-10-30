import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class CookGuard implements CanActivate {
  constructor(private router: Router, private authService: UserService) { }


  canActivate(): boolean {
    const userRole = this.authService.getRole();
    if (userRole === 'cook') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
