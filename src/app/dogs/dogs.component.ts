import { Component } from '@angular/core';
import { DogsPageService } from '../services/dogs-page.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  constructor(private _dogsPage : DogsPageService) { 
    this._dogsPage.retrieveData();
  }
  
}
