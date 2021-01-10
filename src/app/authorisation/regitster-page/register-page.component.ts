import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  form: FormGroup;
  error: string;
  loading = false;

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  SignUp(): void{
    const {email, password} = this.form.value;
    this.loading = true;
    this.authService.SignUp(email, password).then(cred => {
      // console.log(cred);
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

}
