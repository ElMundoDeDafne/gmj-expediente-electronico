import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICatEspecialidadesResponse } from '../../paciente/interfaces/response/cat-esp-response,interface';
import { CatEspecialidadesService } from '../../../services/cat-esp.service';

@Component({
  selector: 'app-censo-general',
  templateUrl: './censo-general.component.html',
  styleUrl: './censo-general.component.css'
})
export class CensoGeneralComponent {
  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  especialidades: ICatEspecialidadesResponse[] = [];
  constructor(private catEspService:CatEspecialidadesService) { }

  ngOnInit(): void {
    //accedemos al micro
    this.getEspecialidades();
  }


  //pruebas de consumo de servicios de catálogos
async getEspecialidades() {
  try {
    const data = await this.catEspService.getAllEspecialidades().toPromise();
    console.log('Especialidades médicas:', data);
    this.especialidades = data ?? [];
  } catch (error) {
    console.error('Error al obtener las especialidades médicas:', error);
  }
}
}
