import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mainPage } from '../models/main-pages';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  private _data !: mainPage [];
  
  constructor(private _http:HttpClient) { }
  retrieveData(): void {
    let subscription = this._http.get("../assets/data/mainPage.json").subscribe({
      next: (data: any) => {
        this._data = data;
      },
      complete: () => {
        console.log(this._data);
        subscription.unsubscribe();
      },
      error: (msg: string) => {
        console.log("Error: " + msg);
        subscription.unsubscribe();
      },
    });

  }


  getData() : mainPage[] | null {
    return this._data;
  }
}
