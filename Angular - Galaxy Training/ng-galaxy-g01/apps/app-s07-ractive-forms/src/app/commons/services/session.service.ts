import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get isAuth(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  constructor() { }

  create(token: string): void {
    localStorage.setItem('token', token);
  }
}
