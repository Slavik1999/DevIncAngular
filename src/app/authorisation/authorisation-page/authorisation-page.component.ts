import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorisation-page',
  templateUrl: './authorisation-page.component.html',
  styleUrls: ['./authorisation-page.component.scss']
})
export class AuthorisationPageComponent implements OnInit {
  form: FormGroup;
  error: string;
  loading = false;
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
  SignIn(): void{
    const {email, password} = this.form.value;
    this.loading = true;
    this.authService.SignIn(email, password).then(cred => {
      this.router.navigate(['']);
      this.loading = false;
    }).catch(error => {
      this.error = error.message;
      this.ClearErrorMessage();
      this.loading = false;
    });
  }

  googleAuth(): void {
    this.loading = true;
    this.authService.GoogleAuth().then(cred => {
      this.router.navigate(['']);
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
      this.router.navigate(['']);
    }).catch(error => {
      this.error = error.message;
    });
  }
  facebookAuth(): void{
    this.authService.FacebookAuth().then(cred => {
      this.router.navigate(['']);
    }).catch(error => {
      this.error = error.message;
    });
  }
}
