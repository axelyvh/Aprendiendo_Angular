import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  Artista: any = {
    external_urls: {
      spotify: ""
    }
  };  
  TopTracks: any = [];  

  constructor(
    private activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { 

    this.activatedRoute.params.subscribe(params => {
      this.GetArtist(params.id);
      this.GetTopTracks(params.id);
    });

  }

  ngOnInit(): void {
  }

  GetArtist(id: string):any {
    this._spotifyService.GetArtist(id).subscribe(data => {
      this.Artista = data;
    });
  }

  GetTopTracks(id: string):any {
    this._spotifyService.GetTopTracksArtist(id).subscribe(data => {
      this.TopTracks = data;
    });
  }

}
