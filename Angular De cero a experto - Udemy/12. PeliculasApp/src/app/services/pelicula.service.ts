import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/carteleraResponse';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _httpClient: HttpClient) { }

  getCartelera(): Observable<CarteleraResponse> {

    return this._httpClient.post<CarteleraResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=fa60204cd9b1b81e8b762e1f0f4041df&language=es-ES&page=1", {});

  }

}
