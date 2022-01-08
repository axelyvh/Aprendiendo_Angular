import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit, AfterContentInit {
  // @ContentChild(TabComponent) tab: TabComponent;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('[TabGroupComponent] [ngAfterContentInit]', this.tabs);

    this.tabs.first.active = true;
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach(tabItem => tabItem.active = false);

    tab.active = true;
  }

}
