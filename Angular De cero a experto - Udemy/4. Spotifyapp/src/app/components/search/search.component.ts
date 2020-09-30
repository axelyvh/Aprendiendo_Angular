import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  Canciones: any;
  Loading: boolean = true;
  Error: boolean = false;
  MensajeError: boolean = false;

  constructor(
    private _spotifyService: SpotifyService
    ) {
      this.SearchArtist("");
    }

  SearchArtist(artist: string): void {

    if(artist.trim().length == 0){
      this.Loading = false;
      return;
    }

    this._spotifyService.ShearchArtist(artist).subscribe((data: any) => {
      this.Canciones = data;
      this.Loading = false;
    }, (error) => {
      this.Loading = false;
      this.Error = true;
      this.MensajeError = error.error.error.message;
    });

  }

}
