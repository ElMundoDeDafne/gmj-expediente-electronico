import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IHojaFrontalResponse } from '../modules/paciente/interfaces/response/frontal-response.interface';
import { IHojaFrontalRequest } from '../modules/paciente/interfaces/request/frontal-request.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ConstantesGenerales } from '../utils/constantes-generales';

@Injectable({
  providedIn: 'root'
})
export class HojaFrontalService {
  recetaResponse:IHojaFrontalResponse = {
    mensajes:[],
    exito:false
  };
  constructor(private httpCliente:HttpClient){}

  /**Llamado a API para generar receta medica */
  registrarObjetoReceta(obj:IHojaFrontalRequest):Observable<IHojaFrontalResponse>{
    return this.httpCliente.post<IHojaFrontalResponse>(ConstantesGenerales.URL_API_FRONTAL, obj);
  }
}
