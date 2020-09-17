import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  Canciones: any[];
  Loading: boolean = true;
  Error: boolean = false;
  MensajeError: boolean = false;

  constructor(private _spotifyService: SpotifyService) { 

    this._spotifyService.getNewReleases().subscribe((data: any) => {
      this.Canciones = data;
      this.Loading = false;
    }, (error) => {
      this.Loading = false;
      this.Error = true;
      this.MensajeError = error.error.error.message;
    });

  }

}
