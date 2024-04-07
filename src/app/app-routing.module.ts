import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPacienteComponent } from './modules/paciente/pages/alta/alta-paciente/alta-paciente.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StillOnWorkPageComponent } from './pages/still-on-work-page/still-on-work-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BusquedaPacienteComponent } from './modules/paciente/pages/busqueda-paciente/busqueda-paciente.component';
import { LoginFormComponent } from './modules/authorization/pages/login-form/login-form.component';

const routes: Routes = [
  {path: 'consulta/nueva',component:AltaPacienteComponent}, //añade rutas
  {path: 'home',component:LandingPageComponent},
  {path:'consulta/pacientes/buscar',component:BusquedaPacienteComponent},
  {path:'consulta/recetas/reimprimir',component:StillOnWorkPageComponent},
  {path:'consulta/citas/reagendar',component:StillOnWorkPageComponent},
  {path:'consulta/expediente',component:StillOnWorkPageComponent},
  {path:'consulta/censos/general',component:StillOnWorkPageComponent},
  {path:'consulta/censos/ha',component:StillOnWorkPageComponent},
  {path:'consulta/censos/emb',component:StillOnWorkPageComponent},
  {path:'consulta/censos/cron',component:StillOnWorkPageComponent},
  {path:'login',component:LoginFormComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'success',redirectTo:'home'},
  {path:'**',component:NotFoundPageComponent}
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
export class AppRoutingModule{

}
