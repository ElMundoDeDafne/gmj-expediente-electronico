import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PerfilesHttpRepository } from "../infrastructure/repositories/perfiles-http.repository";
import { PerfilProfesionalResponse } from "../modules/paciente/interfaces/response/perfil-prof-response.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para cataologo de especialidades médicas
*/
export class CatPerfilesService {
  constructor(private client:HttpClient, private especialidesRepo : PerfilesHttpRepository) { }

  obtenerTodosLosPerfiles() : Observable<PerfilProfesionalResponse> {
    return this.especialidesRepo.obtenerTodosLosPerfiles();
  }

  /**
   *     findAllEspecialidades() : Observable<EspecialidadMedicaResponse> {
         return this.especialidesRepo.obtenerTodasLasEspecialidades();
       }
   */
}
