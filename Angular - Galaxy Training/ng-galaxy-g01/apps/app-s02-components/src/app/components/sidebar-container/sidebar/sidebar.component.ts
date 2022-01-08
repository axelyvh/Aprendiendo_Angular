import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() open: boolean;
  @Output() opened: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class')
  get cssClass(): string {
    return this.open ? 'active' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
    this.updated.emit(this.open);
  }

}
