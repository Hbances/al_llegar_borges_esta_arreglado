import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _data : Pets[] | null = null;
  constructor(private _http:HttpClient) { }

  retrieveData(): void {
    let subscription = this._http.get('../assets/data/pets_data.json').subscribe({
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
  getData() : Pets[] | null {
    return this._data;
  }
}
