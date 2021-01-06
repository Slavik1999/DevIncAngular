﻿﻿import {Injectable} from '@angular/core';
 import {
  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router
} from '@angular/router';

 import {AuthService} from '../services/auth.service';
 import {map} from 'rxjs/operators';
 import {Observable} from 'rxjs';


@Injectable()
export class AuthorizedGuard implements CanActivate{

  constructor(private router: Router, public authService: AuthService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.authService.getAuthState().pipe(
      map(user => {
        if (user){
          return true;
        } else{
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
