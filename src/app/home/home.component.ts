import { Component } from '@angular/core';
import { MainPageService } from '../services/main-page.service';
import { mainPage } from '../models/main-pages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _mainPage: MainPageService){
    this. _mainPage.retrieveData();
  }


  get data() : mainPage[] | null {
    return this._mainPage.getData();
  }
}
