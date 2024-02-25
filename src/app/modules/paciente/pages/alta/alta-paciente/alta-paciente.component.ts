import { Component } from '@angular/core';
import { Paciente } from '../../../interfaces/paciente.interface';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrl: './alta-paciente.component.css'
})
export class AltaPacienteComponent {
  public paciente : Paciente = {
    motivoConsulta:'',
  }
}
