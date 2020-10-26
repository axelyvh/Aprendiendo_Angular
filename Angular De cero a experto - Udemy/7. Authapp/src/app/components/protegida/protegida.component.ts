import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  template: `<ul *ngIf="auth.user$ | async as user">
              <pre>{{ user | json }}</pre>
            </ul>`
})
export class ProtegidaComponent {

  constructor(public auth: AuthService) {}

}
