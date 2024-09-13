import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPacienteComponent } from './modules/paciente/pages/alta/alta-paciente/alta-paciente.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StillOnWorkPageComponent } from './pages/still-on-work-page/still-on-work-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BusquedaPacienteComponent } from './modules/paciente/pages/busqueda-paciente/busqueda-paciente.component';
import { LoginFormComponent } from './modules/authorization/pages/login-form/login-form.component';
import { CensoHaComponent } from './modules/reports/censo-ha/censo-ha.component';
import { CensoEmbarazadasComponent } from './modules/reports/censo-embarazadas/censo-embarazadas.component';
import { CensoCronicosComponent } from './modules/reports/censo-cronicos/censo-cronicos.component';
import { CensoEstomatologiaComponent } from './modules/reports/censo-estomat/censo-estomat.component';
import { CensoGeneralComponent } from './modules/reports/censo-general/censo-general.component';
import { MostrarAgendaFormComponent } from './modules/paciente/pages/agenda/mostrar-agenda-form/mostrar-agenda-forn.component';
import { ConsultaOdontologicaComponent } from './modules/paciente/pages/cons-odonto/cons-odonto.component';


const routes: Routes = [
  {path: 'consulta/nueva',component:AltaPacienteComponent}, //añade rutas
  {path: 'consulta/odontologia',component:ConsultaOdontologicaComponent},
  {path: 'home',component:LandingPageComponent},
  {path:'consulta/pacientes/buscar',component:BusquedaPacienteComponent},
  {path:'consulta/recetas/reimprimir',component:StillOnWorkPageComponent},
  {path:'consulta/citas/reagendar',component:StillOnWorkPageComponent},
  {path:'consulta/expediente',component:StillOnWorkPageComponent},
  {path:'consulta/censos/general',component:CensoGeneralComponent},
  {path:'consulta/censos/ha',component:CensoHaComponent},
  {path:'consulta/censos/emb',component:CensoEmbarazadasComponent},
  {path:'consulta/censos/cron',component:CensoCronicosComponent},
  {path:'consulta/agenda',component:MostrarAgendaFormComponent},
  {path:'consulta/censos/estomatologia',component:CensoEstomatologiaComponent},
  {path:'login',component:LoginFormComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'success',redirectTo:'home'},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
