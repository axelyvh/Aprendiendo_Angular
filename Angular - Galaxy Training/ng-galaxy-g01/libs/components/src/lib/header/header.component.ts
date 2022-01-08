import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() brand: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
