import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
