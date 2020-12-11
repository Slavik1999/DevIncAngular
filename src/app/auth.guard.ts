import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router
} from '@angular/router';

import {AuthService} from './services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router: Router, public authService: AuthService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (this.authService.isLoggedIn){
      return true;
    } else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
