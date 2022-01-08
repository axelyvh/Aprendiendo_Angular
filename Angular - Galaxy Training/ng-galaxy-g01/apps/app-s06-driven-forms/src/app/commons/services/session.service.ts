import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  isAuth: false;

  constructor() { }

  create(token: string): void {
    localStorage.setItem('token', token);
  }
}
