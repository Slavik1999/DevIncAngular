import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {profileImg} from '../../constants/profile-img';
import {FiltersService} from '../../services/filters.service';
import {Filters} from '../../interfaces/interfaces';
import {sortNew, timeAll} from '../../constants/time-constants';
import {displayTile, themeLight} from '../../constants/display-constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  profileImg: string = profileImg;
  constructor(public authService: AuthService, private filtersService: FiltersService) { }

  ngOnInit(): void {
  }

  signOut(): void{
    this.authService.SignOut().then(() => {
      this.authService.user = null;
      this.filtersService.filters = {
        resolved: '',
        categories: [],
        time: timeAll,
        onModeration: '',
        myQuestions: '',
      };
      this.filtersService.sort = sortNew;
      this.filtersService.theme = themeLight;
      this.filtersService.display = displayTile;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
