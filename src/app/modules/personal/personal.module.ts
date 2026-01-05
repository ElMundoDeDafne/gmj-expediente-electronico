import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AltaPersonalComponent } from "./pages/alta-personal-gui/alta-per.component";
import { DomicilioPacienteFormComponent } from '../paciente/pages/alta/alta-paciente/domicilio-paciente-form/domicilio-paciente-form.component';
import { DatosContactoPacienteFormComponent } from "../paciente/pages/alta/alta-paciente/datos-contacto-paciente-form/datos-contacto-paciente-form.component";
import { BsDatepickerConfig, BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from "ngx-bootstrap/modal";

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
    AltaPersonalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    BsDatepickerConfig,BsModalService
  ],
  exports: [AltaPersonalComponent]
})
export class PersonalModule {
    constructor( private bsLocaleService: BsLocaleService){
      this.bsLocaleService.use('es');//fecha en español, datepicker
    }
}
