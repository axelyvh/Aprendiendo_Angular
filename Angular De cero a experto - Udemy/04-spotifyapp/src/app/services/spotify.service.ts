import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  getNewReleases(){

    const Headers = new HttpHeaders({
      'Authorization': 'Bearer BQAbnkO5nurnHx8QKivYTHmZVG5d9qkPJx1HYeVtEwCTRdroLG5nbkyzfGs8D6M2d9CByVfCLcyov5OmYCs'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/browse/new-releases`, { headers: Headers });

  }

  ShearchArtist(name: string){

    const Headers = new HttpHeaders({
      'Authorization': 'Bearer BQAbnkO5nurnHx8QKivYTHmZVG5d9qkPJx1HYeVtEwCTRdroLG5nbkyzfGs8D6M2d9CByVfCLcyov5OmYCs'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`, { headers: Headers });

  }

}
