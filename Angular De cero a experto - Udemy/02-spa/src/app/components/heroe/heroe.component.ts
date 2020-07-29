import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/model/heroe';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroeService: HeroeService
  ) {

    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHereo(params.id);
    });

  }

}
