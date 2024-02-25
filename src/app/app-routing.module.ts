import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPacienteComponent } from './modules/paciente/pages/alta/alta-paciente/alta-paciente.component';
import { WelcomePageComponent } from './modules/pages/landing/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'consulta/nueva',component:AltaPacienteComponent}, //añade rutas
  {path: 'home',component:WelcomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
