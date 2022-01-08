import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroeService } from 'src/app/services/heroe.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private _heroeService: HeroeService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this._ActivatedRoute.snapshot.paramMap.get("id");
    
    if(id !== "nuevo") {
      this._heroeService.get(id).subscribe((response: HeroeModel) => {
        this.heroe = response;
        this.heroe.id = id;
      })
    }

  }

  guardar(form: NgForm) {

    if(form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    console.log(form);
    console.log(this.heroe);

    if(this.heroe.id) {
      
      this._heroeService.update(this.heroe).subscribe(response => {
        console.log(response);

        Swal.fire({
          title: this.heroe.nombre,
          text: 'Se actualizó correctamente',
          type: 'success'
        });

      })

    } else {
      
      this._heroeService.create(this.heroe).subscribe(response => {
        console.log(response);

        Swal.fire({
          title: this.heroe.nombre,
          text: 'Se guardo correctamente',
          type: 'success'
        });

      })

    }

  }

}
