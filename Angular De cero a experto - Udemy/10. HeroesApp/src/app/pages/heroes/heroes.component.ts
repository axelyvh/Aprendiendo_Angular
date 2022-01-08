import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroeService } from 'src/app/services/heroe.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  LstHeroes: HeroeModel[] = [];
  LoadingLstHeroes: boolean = true;

  constructor(private _HeroeService: HeroeService) {
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {

    this.LoadingLstHeroes = true;
    this._HeroeService.GetAll().subscribe(response => {
      this.LstHeroes = response;
      this.LoadingLstHeroes = false;
    })

  }

  delete(heroe: HeroeModel, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea borrar a ${heroe.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(response => {

      if(response.value) {
        
        this.LstHeroes.splice(indice, 1);
        this._HeroeService.delete(heroe.id).subscribe();

      }

    });

  }

}
