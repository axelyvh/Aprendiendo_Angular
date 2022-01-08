import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BadgeComponent } from './components/badge/badge.component';
import { SidebarComponent } from './components/sidebar-container/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild(SidebarComponent, { static: true }) sidebar: SidebarComponent;
  @ViewChild('sidebar', { static: true }) sidebar: SidebarComponent;
  @ViewChildren(BadgeComponent) badges: QueryList<BadgeComponent>;

  @ViewChild('spanBadge', { static: true }) spanBadge: ElementRef<HTMLSpanElement>;


  title = 'app-s02-components';
  loading = true;
  loadingTier = 'warning';

  constructor(
    private renderer: Renderer2
  ) {
    console.log('[AppComponent] [constructor]', this.sidebar);
  }

  ngOnInit(): void {
    console.log('[AppComponent] [ngOnInit]', this.sidebar);
    console.log('[AppComponent] [ngOnInit]', this.badges);
  }

  ngAfterViewInit(): void {
    // this.spanBadge.nativeElement.classList.add('p-3');
    this.renderer.addClass(this.spanBadge.nativeElement, 'p-3');
    console.log('[AppComponent] [ngAfterViewInit]', this.spanBadge);
    console.log('[AppComponent] [ngAfterViewInit]', this.sidebar);
    console.log('[AppComponent] [ngAfterViewInit]', this.badges);
  }

  switchSidebar(): void {
    this.sidebar.toggle();
  }

  log(text: string): void {
    console.log(text);
  }
}
