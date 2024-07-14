import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IPaciente } from '../modules/paciente/interfaces/paciente.interface';
import { Observable } from 'rxjs';
import { ConstantesGenerales } from '../utils/constantes-generales';

@Injectable({
  providedIn: 'root'
})
export class RecetaMedicaService {
  constructor(private httpCliente:HttpClient){}

  /**Llamado a API para generar receta medica */
  registrarObjetoReceta(obj:IPaciente):Observable<Object>{
    return this.httpCliente.post(ConstantesGenerales.BASE_API_ORQ_ENDPOINT,obj);
  }
}
