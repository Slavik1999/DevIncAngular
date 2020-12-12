import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-regitster-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  loading = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSuccessAuth(cred): void{
    this.email = '';
    this.password = '';
    this.authService.isLoggedIn = true;
    this.authService.user = {
      email: cred.user.email
    };
  }

  SignUp(): void{
    this.loading = true;
    this.authService.SignUp(this.email, this.password).then(cred => {
      this.onSuccessAuth(cred);
      this.loading = false;
    }).catch(error => {
      this.error = error.message;
      this.ClearErrorMessage();
      this.loading = false;
    });
  }

  ClearErrorMessage(): void{
    setTimeout(() => {
      this.error = '';
    }, 4000);
  }

}
