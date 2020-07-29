import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/model/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()
  heroe: Heroe;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.heroe.id);
  }

}
