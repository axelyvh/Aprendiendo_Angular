import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Tier } from '../../types/tier.type';
import { Size } from '../../types/size.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() tier: Tier;
  @Input() size: Size;

  sizeClass: string;

  constructor() { }


  ngOnInit(): void {
    this.sizeClass = this.size ? `btn-${this.size}` : '';
  }

  @HostListener('click')
  buttonClick(): void {
    console.log('[ButtonComponent] [LOG] boton clickeado');
  }

}
