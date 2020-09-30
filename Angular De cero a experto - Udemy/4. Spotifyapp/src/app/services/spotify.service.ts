import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  getQuery(url: string){

    const Headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5lcVqCAKSf62FqXWlSRBUb1eZWa5oFb06zFt1-Vogu2eMEqn_Ew84JfAdTTuCkStUMoxJAG0yAdS71sE'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/${url}`, { headers: Headers });

  }

  getNewReleases(){

    return this.getQuery(`browse/new-releases`)
               .pipe(map((data: any) => data.albums.items));

  }

  ShearchArtist(name: string){

    return this.getQuery(`search?q=${name}&type=artist`)
               .pipe(map((data: any) => data.artists.items));                

  }

  GetArtist(id: string){
    
    return this.getQuery(`artists/${id}`)
               .pipe(map((data: any) => data));                

  }

  GetTopTracksArtist(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map((data: any) => data.tracks));                

  }

}
