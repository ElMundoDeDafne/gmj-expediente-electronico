import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IBusqPacientesResponse } from "../modules/paciente/interfaces/response/busq-pacientes-response.interface";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para busqueda de pacientes
 */
export class BusquedaPacienteService {
  /**
   * Constructor del servicio
   */
  constructor(private client : HttpClient) {}
      async getData() : Promise<IBusqPacientesResponse> {
      try {
        const response = firstValueFrom(
        this.client.get<IBusqPacientesResponse>('http://localhost:8089/api/pacientes')
       );
        return response;
      } catch(exception) {
        console.error('Error ocurrido al obtener las ocupaciones: ',exception);
        return {
          exito: false,
          folio: '',
          nombres: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          curp: '',
          localidad: '',
          edad: 0,
          especialidad: '',
          medicoTratante: '',
          fechaUltimaConsulta: '',
          ultimaReceta: ''
        };
      }
    }
}
