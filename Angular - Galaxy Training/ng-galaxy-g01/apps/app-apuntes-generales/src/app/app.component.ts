import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

// Decorador
@Component({
  
  // Metadatos

  selector: 'app-root',
  
  templateUrl: './app.component.html', // Archivo de plantilla/template
  styleUrls: ['./app.component.css'], // Archivo de estilos/style

  /*
  template: '<div></div>', // Codigo html
  styleUrls: [`.header {color: white}`] // Codigo css
  */

  //Encapsulation es un metadato opcional
  //ViewEncapsulation.Emulated -> Es el por defecto crea atributos nghost en el componente
  //ViewEncapsulation.ShadowDom -> Crea un arbol de estilos dentro de la etiqueta del componente
  //ViewEncapsulation.None -> Los estilos del componente se insertan en el head del documento general. En este caso no funciona el :host
  /*
  encapsulation: ViewEncapsulation.Emulated 
  */

})
export class AppComponent {
  
  // Solo se puede usar el HostBinding una sola vez. Para colocar mas clases solo es cuestion de la logica.
  // Si desde el HTML se agrega alguna clase al componente tambien formaria parte del resultado final.
  @HostBinding('class')
  // Se crea la logica en esta propiedad
  get cssClass(): string {
    // Logica....
    return `badge bg-${1}`;
  }

}
