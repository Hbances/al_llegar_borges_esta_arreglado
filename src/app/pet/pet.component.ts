import { Component } from '@angular/core';
import { MainPageService } from '../services/main-page.service';
import { ActivatedRoute } from '@angular/router';
import { mainPage } from '../models/main-pages';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {

  public pet !: any ;

  constructor (private _mainService : MainPageService,
    private _activatedRoute : ActivatedRoute) {

    
      this._activatedRoute.params.subscribe((data : any) => {
       
      }); 
  }

}
