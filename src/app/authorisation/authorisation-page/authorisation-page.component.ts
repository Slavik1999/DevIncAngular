import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorisation-page',
  templateUrl: './authorisation-page.component.html',
  styleUrls: ['./authorisation-page.component.scss']
})
export class AuthorisationPageComponent implements OnInit {
  password: string;
  email: string;
  error: string;
  loading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSuccessAuth(cred): void{
    this.email = '';
    this.password = '';
    // this.authService.isLoggedIn = true;
    this.authService.user = cred.user;
    this.router.navigate(['']);
  }

  SignIn(): void{
    this.loading = true;
    this.authService.SignIn(this.email, this.password).then(cred => {
      this.onSuccessAuth(cred);
      this.loading = false;
    }).catch(error => {
      this.error = error.message;
      this.ClearErrorMessage();
      this.loading = false;
    });
  }

  googleAuth(): void {
    this.authService.GoogleAuth().then(cred => {
      this.onSuccessAuth(cred);
    }).catch(error => {
      console.error(error);
    });
  }

  ClearErrorMessage(): void{
    setTimeout(() => {
      this.error = '';
    }, 4000);
  }

  githubAuth(): void{
    this.authService.GithubAuth().then(cred => {
      this.onSuccessAuth(cred);
    }).catch(error => {
      this.error = error.message;
    });
  }
  facebookAuth(): void{
    this.authService.FacebookAuth().then(cred => {
      this.onSuccessAuth(cred);
    }).catch(error => {
      this.error = error.message;
    });
  }
}