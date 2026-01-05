import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAltaPersonalRequest } from '../modules/paciente/interfaces/request/alta-personal-request.interface';
import { IAltaPersonalResponse } from '../modules/paciente/interfaces/response/alta-personal-response.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ConstantesGenerales } from '../utils/constantes-generales';
import { AltaPersonalHttpRepository } from '../infrastructure/repositories/alta-personal-http.repository';

@Injectable({
  providedIn: 'root'
})
export class AltaPersonalService {

  constructor(private repository : AltaPersonalHttpRepository) { }

  //Metodo post para agregar un personal nuevo a la base de datos
  registrarPersonal(request : IAltaPersonalRequest) {
    this.repository.registrarNuevoPersonal(request);
    //return this.client.post<IBusqPacientesResponse[]>(ConstantesGenerales.URL_API_BUSQ_PACIENTES, data);
  }

  /**     getDataPost(data: IBusqPacientesRequest) : Observable<IBusqPacientesResponse[]> {
      return this.client.post<IBusqPacientesResponse[]>(ConstantesGenerales.URL_API_BUSQ_PACIENTES, data);
    };*/


}
