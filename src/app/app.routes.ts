import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', component: LoginComponent}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:id', component: FormularioComponent },
    // Ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}
];
