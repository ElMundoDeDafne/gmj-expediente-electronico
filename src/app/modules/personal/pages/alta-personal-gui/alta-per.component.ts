import { Component } from '@angular/core';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { IAltaPersonalRequest } from '../../../paciente/interfaces/request/alta-personal-request.interface';
import { AltaPersonalService } from '../../../../services/alta-personal.service';
import { AlertGeneratorService } from '../../../../pages/alerts/alert-generator/alert-generator.service';

@Component({
  selector: 'app-alta-personal',
  templateUrl: './alta-per.component.html',
  styleUrl: './alta-per.component.css'
})
export class AltaPersonalComponent {
  // Aquí puedes agregar la lógica necesaria para el componente de alta de personal
  // Por ejemplo, métodos para manejar el formulario de alta, validaciones, etc.
  ngOnInit() {
  this.formatearFecha();
  }


  constructor(private altaPersonalService : AltaPersonalService, private alertas:AlertGeneratorService) {
    // Inicialización del componente
  }

  /**
   * DEFINICION DE VARIABLES
   */

  fecha : Date = new Date();
  fechaFormateada : string = '';
  tipoPersona : string[] = ['Médico', 'Enfermera', 'Administrativo', 'Otro'];
  especialidades : string[] = ['Cardiología', 'Pediatría', 'Ginecología', 'Traumatología', 'Otro'];
  altaPersonalRequest : IAltaPersonalRequest;

  // Método de ejemplo para manejar el envío del formulario
  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }

  /**DEFINICION DE FUNCIONES */

  formatearFecha(): void{
    const day = String(this.fecha.getDate()).padStart(2, '0');
    const month = String(this.fecha.getMonth() + 1).padStart(2, '0'); // Mes empieza en 0
    const year = this.fecha.getFullYear();
    this.fechaFormateada = `${day}/${month}/${year}`;
    console.error('Fecha formateada:', this.fechaFormateada);
    console.error(`fecha: ${this.fecha}`);

  }

  actualizarFecha(valor: string): void {
    const [day, month, year] = valor.split('/');
    this.fecha = new Date(Number(day), Number(month) - 1, Number(year));
  }
  //metodo para registrar personal mediante servicio
  registrarPersonal(): void {

  }
}
