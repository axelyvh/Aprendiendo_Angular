import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe.service';
import { Heroe } from 'src/app/model/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _router: Router, private _heroeService: HeroeService) { }

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
  }

  verHeroe(id: number){
    this._router.navigate(['/heroe', id]);
  }

}
