import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  @Input()
  item: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  GetArtist(item: any): any {

    let IdArtista;

    if(item.type === "artist"){
      IdArtista = item.id;
    }else{
      IdArtista = item.artists[0].id;
    }

    this.router.navigate(['/artista', IdArtista]);

  }

}
