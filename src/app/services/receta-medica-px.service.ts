import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IPaciente } from '../modules/paciente/interfaces/paciente.interface';
import { Observable } from 'rxjs';
import { ConstantesGenerales } from '../utils/constantes-generales';
import { IRecetaRequest } from '../modules/paciente/interfaces/request/receta-request.interface';
import { IRecetaResponse } from '../modules/paciente/interfaces/response/receta-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RecetaMedicaService {
  recetaResponse:IRecetaResponse = {
    base64:'',
    mensajes:[],
    exito:false
  };
  constructor(private httpCliente:HttpClient){}

  /**Llamado a API para generar receta medica */
  registrarObjetoReceta(obj:IRecetaRequest):Observable<IRecetaResponse>{
    return this.httpCliente.post<IRecetaResponse>(ConstantesGenerales.URL_API_REPORTES, obj);
  }
}
