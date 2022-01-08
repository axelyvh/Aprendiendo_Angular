import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  id: number;

  constructor() {
    this.id = Math.random();
  }
}
