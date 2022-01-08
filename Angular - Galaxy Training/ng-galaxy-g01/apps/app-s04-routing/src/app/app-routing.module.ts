import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryView } from './views/category/category.view';
import { ContactView } from './views/contact/contact.view';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { PlatformView } from './views/platform/platform.view';
import { PortalView } from './views/portal/portal.view';
import { SignInView } from './views/sign-in/sign-in.view';
import { WorkshopsView } from './views/workshops/workshops.view';

const routes: Routes = [
  // { path: '', component: HomeView },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: '',
    component: PortalView,
    children: [
      { path: 'inicio', component: HomeView },
      { path: 'talleres', component: WorkshopsView },
      { path: 'plataforma', component: PlatformView },
      { path: 'contactanos', component: ContactView },
      { path: 'categoria/:categoryName', component: CategoryView },
    ]
  },
  { path: 'iniciar-sesion', component: SignInView },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
  },
  // { path: '**', redirectTo: 'inicio' },
  { path: '**', component: NotFoundView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
