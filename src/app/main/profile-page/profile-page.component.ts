import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {profileImg} from '../../shared/constants/profile-img';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import {FiltersService} from '../../shared/services/filters.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  form: FormGroup;
  profileImg: string = profileImg;
  constructor(public authService: AuthService, private fb: FormBuilder, public filtersService: FiltersService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      photoURL: this.fb.control(''),
      displayName: this.fb.control('')
    });
    if (this.authService.user){
      this.form.patchValue(this.authService.user);
    }
  }
  submit(): void{
    this.authService.updateUser(
      {
        photoURL: this.form.value.photoURL,
        displayName: this.form.value.displayName
      });
  }

}
