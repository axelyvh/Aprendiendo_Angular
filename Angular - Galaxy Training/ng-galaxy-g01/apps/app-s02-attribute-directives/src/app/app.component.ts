import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Directivas de Atributo';
  boxClass = 'box-inactive';
  boxStyle = 'background: gray';
  boxBackground = 'gray';
  active: boolean;

  changeBoxClass(className: string): void {
    this.boxClass = className;
    this.active = Boolean(className === 'box-active');
    this.boxStyle = this.active ? 'background: blue' : 'background: gray';
    this.boxBackground = this.active ? 'blue' : 'gray';
  }
}
