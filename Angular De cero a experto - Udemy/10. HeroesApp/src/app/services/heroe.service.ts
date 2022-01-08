import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url_base: string = "https://login-app-dd64a.firebaseio.com/";

  constructor(private _httpClient: HttpClient) { }

  create(heroe: HeroeModel) {

    return this._httpClient.post(`${this.url_base}/heroes.json`, heroe)
                    .pipe(
                      map((response: any) => heroe.id = response.name)
                    );

  }

  update(heroe: HeroeModel) {

    let heroeTemplate = {
      ...heroe
    };

    delete heroeTemplate.id;    

    return this._httpClient.put(`${this.url_base}/heroes/${heroe.id}.json`, heroeTemplate)
                    .pipe(
                      map((response: any) => console.log(response))
                    );

  }

  get(id: string) {

    return this._httpClient.get(`${this.url_base}/heroes/${id}.json`);

  }

  delete(id: string) {

    return this._httpClient.delete(`${this.url_base}/heroes/${id}.json`);

  }

  GetAll() {

    return this._httpClient.get(`${this.url_base}/heroes.json`)
    .pipe(
      map(this.CreateArrayHeroeByObject)
    );

  }

  CreateArrayHeroeByObject(object: Object) {

    let array: HeroeModel[] = [];

    if(object === null) {
      array = [];
    }

    Object.keys(object).forEach((key) => {

      let obj: HeroeModel = object[key];
      obj.id = key;

      array.push(obj);

    })

    return array;

  }

}
