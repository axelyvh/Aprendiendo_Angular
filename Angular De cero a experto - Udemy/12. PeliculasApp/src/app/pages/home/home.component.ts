import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/carteleraResponse';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private _peliculaService: PeliculaService){
  }

  ngOnInit(): void {
    this._peliculaService.getCartelera().subscribe(response => {
      this.movies = response.results;
    })
  }

}
