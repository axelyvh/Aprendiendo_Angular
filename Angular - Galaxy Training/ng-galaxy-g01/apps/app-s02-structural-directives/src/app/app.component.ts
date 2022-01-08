import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-s02-structural-directives';
  active = false;
  posts: object[] = [
    { title: 'Post 1', description: 'Hola Mundo', active: true, template: 'template1'},
    { title: 'Post 2', description: 'Hola Mundo', active: false, template: 'template2'},
    { title: 'Post 3', description: 'Hola Mundo', active: true, template: 'template3'},
    { title: 'Post 4', description: 'Hola Mundo', active: true},
  ];
}
