import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/model/heroe';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  termino: string;
  heroes: Heroe[] = [];

  constructor(private _router: Router, private _activateRoute: ActivatedRoute, private _heroeService: HeroeService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(param => {
      this.termino = param.termino;
      this.heroes = this._heroeService.BuscarHeroes(param.termino);
    });
  }

  verHeroe(id: number){
    this._router.navigate(['/heroe', id]);
  }

}

