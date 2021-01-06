import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map} from 'rxjs/operators';

@Injectable()

export class UnauthorizedGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map(user => {
        if (!user){
          return true;
        } else{
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
