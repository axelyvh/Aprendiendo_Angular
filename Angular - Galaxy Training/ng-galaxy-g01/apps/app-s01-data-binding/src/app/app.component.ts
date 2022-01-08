import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galaxy Training';
  student = { name: 'Luis', lastName: 'Vilcarromero' };
  active = true;
  name = 'Luis';

  save(): void {
    console.log('guardar');
  }

  updateName(e) {
    console.log(e.target.value);
    this.name = e.target.value;
  }

}
