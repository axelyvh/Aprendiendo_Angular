import { Component } from '@angular/core';
import { DATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-s02-test';
  data = DATA;
}
