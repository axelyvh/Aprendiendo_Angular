import { Routes } from "@angular/router";

import { DetalleComponent } from './detalle.component';
import { EditarComponent } from './editar.component';
import { NuevoComponent } from './nuevo.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: NuevoComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'editar/:id', component: EditarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];