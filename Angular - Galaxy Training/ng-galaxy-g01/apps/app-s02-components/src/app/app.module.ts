import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { SidebarContainerComponent } from './components/sidebar-container/sidebar-container.component';
import { SidebarComponent } from './components/sidebar-container/sidebar/sidebar.component';
import { SidebarContentComponent } from './components/sidebar-container/sidebar-content/sidebar-content.component';
import { SidebarFooterComponent } from './components/sidebar-container/sidebar/sidebar-footer/sidebar-footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab-group/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    SidebarContainerComponent,
    SidebarComponent,
    SidebarContentComponent,
    SidebarFooterComponent,
    SpinnerComponent,
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
