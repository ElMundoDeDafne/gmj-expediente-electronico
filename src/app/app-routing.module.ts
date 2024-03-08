import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPacienteComponent } from './modules/paciente/pages/alta/alta-paciente/alta-paciente.component';
import { WelcomePageComponent } from './pages/landing/welcome-page/welcome-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StillOnWorkPageComponent } from './pages/still-on-work-page/still-on-work-page.component';

const routes: Routes = [
  {path: 'consulta/nueva',component:AltaPacienteComponent}, //añade rutas
  {path: 'home',component:WelcomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundPageComponent},
  {path:'consulta/pacientes/buscar',component:StillOnWorkPageComponent},
  {path:'consulta/recetas/reimprimir',component:StillOnWorkPageComponent},
  {path:'consulta/citas/reagendar',component:StillOnWorkPageComponent},
  {path:'consulta/expediente',component:StillOnWorkPageComponent}
];
/**
 *         <li><a class="dropdown-item" routerLink="" routerLinkActive="active">Busqueda paciente</a></li>
        <li><a class="dropdown-item" routerLink="" routerLinkActive="active">Reimpresion receta</a></li>
        <li><a class="dropdown-item" routerLink="" routerLinkActive="active">Reagendar cita medica</a></li>
        <li><a class="dropdown-item" routerLink="" routerLinkActive="active">Consultar expediente</a></li>
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
