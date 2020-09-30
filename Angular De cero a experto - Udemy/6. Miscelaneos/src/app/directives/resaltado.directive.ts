import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { }

  @Input("appResaltado")
  nuevoColor: string;

  @HostListener('mouseenter')
  mouseEntro(){
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave')
  mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color: string = "yellow"): void{
    this.el.nativeElement.style.backgroundColor = color;
  }

}
