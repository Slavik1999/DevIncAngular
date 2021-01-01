import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {profileImg} from '../../constants/profile-img';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  profileImg: string = profileImg;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut(): void{
    this.authService.SignOut().then(() => {
      this.authService.user = null;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
