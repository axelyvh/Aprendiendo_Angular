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

  constructor(private _spotifyService: SpotifyService) { }

  SearchArtist(artist: string): void {

    this._spotifyService.ShearchArtist(artist).subscribe((data: any) => {
      this.Canciones = data.artists.items;
    });

  }

}
