/**
 * Propiedad de El Mundo de Dafne
 * @author Christian Yamil Castillo Covarrubias
*/

import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
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
import { BusquedaPacienteComponent } from './pages/busqueda-paciente/busqueda-paciente.component';
import { HistorialClinicoIFormComponent } from './pages/historial-clinico-i-form/historial-clinico-i-form.component';
import { HistorialClinicoIiFormComponent } from './pages/historial-clinico-ii-form/historial-clinico-ii-form.component';
import { ExploracionFisicaFormComponent } from './pages/exploracion-fisica-form/exploracion-fisica-form.component';
import { AntecedentesFamiliaresFormComponent } from './pages/alta/alta-paciente/antecedentes-familiares-form/antecedentes-familiares-form.component';
import { AntecedentesPersonalesPatFormComponent } from './pages/alta/alta-paciente/antecedentes-personales-pat-form/antecedentes-personales-pat-form.component';
import { EntornoViviendaFormComponent } from './pages/entorno-vivienda-form/entorno-vivienda-form.component';
import { AntecedentesGinecoObstetricosComponent } from './pages/alta/alta-paciente/antecedentes-gineco-obstetricos/antecedentes-gineco-obstetricos.component';
import { InmunizacionesFormComponent } from './pages/alta/alta-paciente/inmunizaciones-form/inmunizaciones-form.component';
import { DatosContactoPacienteFormComponent } from './pages/alta/alta-paciente/datos-contacto-paciente-form/datos-contacto-paciente-form.component';
import { InterrogtorioPacienteFormComponent } from './pages/alta/alta-paciente/interrogtorio-paciente-form/interrogtorio-paciente-form.component';
import { EntornoViviendaPacienteFormComponent } from './pages/alta/alta-paciente/entorno-vivienda-paciente-form/entorno-vivienda-paciente-form.component';
import { NotasMedicasFormComponent } from './pages/alta/alta-paciente/notas-medicas-form/notas-medicas-form.component';
import { NotasEnfermeriaFormComponent } from './pages/alta/alta-paciente/notas-enfermeria-form/notas-enfermeria-form.component';
import { AntecedentesPersonalesNoPatologicosFormComponent } from './pages/alta/alta-paciente/antecedentes-pers-np-form/antecedentes-pers-np-form.component';
import { InspeccionesGeneralesPacienteFormComponent } from './pages/alta/alta-paciente/inspecciones-grales-p-form/inspecciones-grales-p-form.component';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { MostrarAgendaFormComponent } from './pages/agenda/mostrar-agenda-form/mostrar-agenda-forn.component';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { ConsultaOdontologicaComponent } from './pages/cons-odonto/cons-odonto.component';

defineLocale('es', esLocale);

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AltaPacienteComponent,
    LandingPageComponent,
    InformacionPacienteFormComponent,
    DomicilioPacienteFormComponent,
    SignosVitalesPacienteFormComponent,
    BusquedaPacienteComponent,
    AntecedentesFamiliaresFormComponent,
    HistorialClinicoIFormComponent,
    HistorialClinicoIiFormComponent,
    AntecedentesPersonalesPatFormComponent,
    AntecedentesGinecoObstetricosComponent,
    AntecedentesPersonalesNoPatologicosFormComponent,
    ExploracionFisicaFormComponent,
    EntornoViviendaFormComponent,
    InmunizacionesFormComponent,
    DatosContactoPacienteFormComponent,
    InterrogtorioPacienteFormComponent,
    InspeccionesGeneralesPacienteFormComponent,
    EntornoViviendaPacienteFormComponent,
    NotasMedicasFormComponent,
    NotasEnfermeriaFormComponent,
    MostrarAgendaFormComponent,
    ConsultaOdontologicaComponent
  ],
  imports: [
    CommonModule,FormsModule,MatTabsModule,MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,MatInputModule,
    MatIconModule, MatDatepickerModule, MatFormFieldModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    AccordionModule,DayPilotModule
  ],
  providers: [
    AlertConfig, BsDatepickerConfig,
    { provide: MAT_DATE_FORMATS, useValue: 'en-GB' },
  ]
})
export class PacienteModule {
  constructor( private bsLocaleService: BsLocaleService){
    this.bsLocaleService.use('es');//fecha en español, datepicker
  }


 }
