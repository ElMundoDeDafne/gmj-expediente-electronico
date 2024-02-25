import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AltaPacienteComponent } from './pages/alta/alta-paciente/alta-paciente.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AltaPacienteComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,FormsModule,MatTabsModule
  ]
})
export class PacienteModule { }
