import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  claseAlerta = "alert-info";
  propiedad: any = {
    danger: true
  };

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cargar(){

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }

}
