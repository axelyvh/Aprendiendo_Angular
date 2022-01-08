import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular pipEs';
  paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
  Aldus PageMaker including versions of Lorem Ipsum.
  `;
  items = ['item 1', 'item 2', 'item 3'];
  price = 99999.994;
  today = new Date();
  advance = 0.48;
  person = {
    name: 'Luis',
    lastname: 'Vilcarromero',
    status: 'A'
  };
  fileName;
  defaultFileName = 'default2.png';

  getIconPath() {
    console.log('ejecutando');

    return '';
  }
}
