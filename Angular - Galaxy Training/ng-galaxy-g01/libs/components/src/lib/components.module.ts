import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';

const COMPONENTS = [
  ComponentsComponent,
  HeaderComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
  ],
  exports: COMPONENTS
})
export class GlxComponentsModule { }
