import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BusquedaPacientesResponseDTO } from "../modules/paciente/interfaces/response/busq-pacientes-response.interface";
import { ConstantesGenerales } from "../utils/constantes-generales";
import { ICatEspecialidadesResponse } from "../modules/paciente/interfaces/response/cat-esp-response.interface";
import { EspecialidadesHttpRepository } from '../infrastructure/repositories/especialidades-http.repository';
import { EspecialidadMedicaResponse } from "../modules/paciente/interfaces/response/especialidad-med-response.interface";

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para cataologo de especialidades médicas
*/
export class CatEspecialidadesService {
constructor(private client:HttpClient, private especialidesRepo : EspecialidadesHttpRepository) { }

    findAllEspecialidades() : Observable<EspecialidadMedicaResponse> {
      return this.especialidesRepo.obtenerTodasLasEspecialidades();
    }

    getAllEspecialidades() : Observable<ICatEspecialidadesResponse[]> {
      return this.client.get<ICatEspecialidadesResponse[]>(ConstantesGenerales.URL_API_CAT_ESPECIALIDADES);
    };
    //Metodo para dar de alta una nueva especialidad
    // createEspecialidad(data: ICatEspecialidadesResponse) : Observable<ICatEspecialidadesResponse> {
    //   return this.client.post<ICatEspecialidadesResponse>(ConstantesGenerales.URL_API_CAT_ESPECIALIDADES, data);
    // };

    /**Metodo para obtener una especialidad por el codigo */
    getEspecialidadByCodigo(codigo: string) : Observable<ICatEspecialidadesResponse> {
      const url = `${ConstantesGenerales.URL_API_CAT_ESPECIALIDADES}/desc?codigo=${codigo}`;
      return this.client.get<ICatEspecialidadesResponse>(url);
    };

}
