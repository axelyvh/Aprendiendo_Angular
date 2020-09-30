import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html'
})
export class NgswitchComponent implements OnInit {

  alerta: string = "primary";

  constructor() { }

  ngOnInit(): void {
  }

}
