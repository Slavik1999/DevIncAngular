import { Component, OnInit } from '@angular/core';
import {categories} from '../../../shared/constants/categories-constants';

@Component({
  selector: 'app-titles-parameters',
  templateUrl: './titles-parameters.component.html',
  styleUrls: ['./titles-parameters.component.scss']
})
export class TitlesParametersComponent implements OnInit {
  categories: string[] = categories;
  constructor() { }

  ngOnInit(): void {
  }

}
