import { Component } from '@angular/core';
import { DomicilioPaciente } from '../../../../interfaces/domicilio-paciente.interface';

@Component({
  selector: 'app-domicilio-paciente-form',
  templateUrl: './domicilio-paciente-form.component.html',
  styleUrl: './domicilio-paciente-form.component.css'
})
export class DomicilioPacienteFormComponent {
  public domicilio : DomicilioPaciente = {  }
}
