import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatsPages } from '../models/cats-pages';
@Injectable({
  providedIn: 'root'
})
export class CatsPageService {

  private _data: CatsPages[] | null = null;
  
  constructor(private _http:HttpClient) { }
  retrieveData(): void {
    let subscription = this._http.get("../assets/data/pets_data.json").subscribe({
      next: (data: any) => {
        this._data = data.pets;
        // console.log(this._data);
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

  getData() : CatsPages[] | null {
    return this._data;
  }
}
