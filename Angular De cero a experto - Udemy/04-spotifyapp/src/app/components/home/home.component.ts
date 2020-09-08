import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  Canciones: any;

  constructor(private _spotifyService: SpotifyService) { 
    this._spotifyService.getNewReleases().subscribe((data: any) => {
      this.Canciones = data.albums.items;
    });
  }

}
