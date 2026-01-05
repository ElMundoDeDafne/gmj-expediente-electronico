import { Component } from '@angular/core';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { IAltaPersonalRequest } from '../../../paciente/interfaces/request/alta-personal-request.interface';
import { AltaPersonalService } from '../../../../services/alta-personal.service';
import { AlertGeneratorService } from '../../../../pages/alerts/alert-generator/alert-generator.service';
import { EspecialidadMedicaResponse } from '../../../paciente/interfaces/response/especialidad-med-response.interface';
import { CatEspecialidadesService } from '../../../../services/cat-esp.service';
import { PerfilProfesionalResponse } from '../../../paciente/interfaces/response/perfil-prof-response.interface';
import { CatPerfilesService } from '../../../../services/cat-perfiles.service';
import { Utilerias } from '../../../../utils/utilerias';

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
    this.findAllEspecialidades();
    this.obtenerPerfilesProfesionales();
  }


  constructor(private altaPersonalService : AltaPersonalService,
    private especialidadService : CatEspecialidadesService,
    private alertas:AlertGeneratorService,
    private perfilesService : CatPerfilesService) {
    // Inicialización del componente
  }

  /**
   * DEFINICION DE VARIABLES
   */

  fecha : Date = new Date();
  fechaFormateada : string = '';
  tipoPersona : string[] = [];
  especialidades : string[] = [];
  perfiles : string[] = [];
  altaPersonalRequest : IAltaPersonalRequest = {};
  especialidadesResponse : EspecialidadMedicaResponse = {"datos":[]};
  perfilesResponse : PerfilProfesionalResponse = {"datos":[]};
  bsValue : Date = new Date();
  fechaNacimiento : string = '';
  utils : Utilerias = new Utilerias();

  // Método de ejemplo para manejar el envío del formulario
  onSubmit() {
    // Lógica para manejar el envío del formulario
    this.registrarPersonal();
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
     console.error('entrando a dar de alta...');
     console.error(JSON.stringify(this.altaPersonalRequest));
     if(!this.fechaNacimiento) {
        this.alertas.ventanaInformacion('La fecha de nacimiento es obligatoria.');
     }
     this.altaPersonalRequest.fechaNacimiento = this.utils.formatIsoDateToDDMMYYYY(this.fechaNacimiento);
     this.altaPersonalService.registrarPersonal(this.altaPersonalRequest);
  }

  findAllEspecialidades():void {
    this.especialidadService.findAllEspecialidades().subscribe(response => {
      this.especialidadesResponse = response;
      console.error('respuesta: '+this.especialidadesResponse);
      this.especialidades = this.especialidadesResponse.datos.map(esp => esp.descripcionEspe);
      console.error('Especialidades cargadas:', this.especialidades);
    },
    error => {
      console.error('Error al cargar especialidades:', error);
    });
  }

  obtenerPerfilesProfesionales():void {
    this.perfilesService.obtenerTodosLosPerfiles().subscribe(response => {
      this.perfilesResponse = response;
      console.error('respuesta perfiles: '+this.perfilesResponse);
      this.perfiles = this.perfilesResponse.datos.map(perf => perf.descripcion);
      console.error('Perfiles cargados:', this.perfiles);
      },
      error => {
        console.error('Error al cargar perfiles profesionales:', error);
      });
  }


}
