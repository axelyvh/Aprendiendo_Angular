import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({ // Decorador
  /* Metadatos */
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {       

  constructor() { }

  ngOnInit(): void {
  }

}
