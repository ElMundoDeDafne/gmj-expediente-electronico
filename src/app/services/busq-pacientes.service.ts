import { IBusqPacientesRequest } from './../modules/paciente/interfaces/request/busq-pacientes-request.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IBusqPacientesResponse } from "../modules/paciente/interfaces/response/busq-pacientes-response.interface";
import { firstValueFrom, Observable } from "rxjs";
import { ConstantesGenerales } from '../utils/constantes-generales';

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


    /**Funcion para consumir servicio mediante metodo post*/
    getDataPost(data: IBusqPacientesRequest) : Observable<IBusqPacientesResponse> {
      return this.client.post<IBusqPacientesResponse>(ConstantesGenerales.URL_API_BUSQ_PACIENTES, data);
    };

    //   async getData() : Promise<IBusqPacientesResponse> {
    //   try {
    //     const response = firstValueFrom(
    //     this.client.get<IBusqPacientesResponse>('http://localhost:8090/api/v1/paciente/busqueda/get')
    //    );
    //    console.error(response);
    //     return response;
    //   } catch(exception) {
    //     console.error('Error ocurrido al obtener las ocupaciones: ',exception);
    //     return {
    //       exito: false
    //     };
    //   }
    // }
}
