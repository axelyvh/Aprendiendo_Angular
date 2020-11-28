import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises: any[] = [];

  usuario: any = {
    nombre: "Axel Yoliston",
    apellido: "Vasquez Herrera",
    correo: "axel@gmail.com",
    pais: "PER",
    genero: "M"
  };

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this.getAllPaises();
  }

  Guardar(form: NgForm) {

    if(form.invalid) {
      
      Object.values(form.controls).forEach(control => {
        
        control.markAsTouched();

      });

      return;
    }

    console.log(form.controls);
    console.log(form);

  }

  getAllPaises(){

    return this._paisService.GetAll().subscribe(response => {
      this.paises = response; 
      this.paises.unshift({nombre: "Seleccione...", codigo: ""});
    })

  }

}
