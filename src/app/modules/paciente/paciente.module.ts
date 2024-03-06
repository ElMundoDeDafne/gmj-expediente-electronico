import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AltaPacienteComponent } from './pages/alta/alta-paciente/alta-paciente.component';
import { InformacionPacienteFormComponent } from './pages/alta/alta-paciente/informacion-paciente-form/informacion-paciente-form.component';
import { DomicilioPacienteFormComponent } from './pages/alta/alta-paciente/domicilio-paciente-form/domicilio-paciente-form.component';
import { SignosVitalesPacienteFormComponent } from './pages/alta/alta-paciente/signos-vitales-paciente-form/signos-vitales-paciente-form.component';

@NgModule({
  declarations: [
    AltaPacienteComponent,
    LandingPageComponent,
    InformacionPacienteFormComponent,
    DomicilioPacienteFormComponent,
    SignosVitalesPacienteFormComponent
  ],
  imports: [
    CommonModule,FormsModule,MatTabsModule,MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,MatInputModule,
    MatIconModule, MatDatepickerModule, MatFormFieldModule
  ]
})
export class PacienteModule { }
