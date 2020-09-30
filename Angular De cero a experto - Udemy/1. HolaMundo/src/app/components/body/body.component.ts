import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html' // template en un archivo
})
export class BodyComponent {

    frase: any;
    mostrar: boolean;
    personajes: string[];

    constructor(){
        this.frase = {
            mensaje: 'Un gran poder requiere un gran responsabilidad',
            autor: 'Ben Parker'
        };
        this.mostrar = true;
        this.personajes = ['Spiderman', 'Iro man', 'Capitan america'];
    }

}
