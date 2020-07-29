import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscador/:termino', component: BuscadorComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
