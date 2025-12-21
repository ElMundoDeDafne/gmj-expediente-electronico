import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PerfilesRepository } from "../../core/repositories/perfiles.repository";
import { Observable } from "rxjs";
import { PerfilProfesionalResponse } from "../../modules/paciente/interfaces/response/perfil-prof-response.interface";
import { ConstantesGenerales } from "../../utils/constantes-generales";

@Injectable({
  providedIn: 'root'
})
export class PerfilesHttpRepository extends PerfilesRepository {
    constructor(private http: HttpClient) {
      super();
    }


    override obtenerTodosLosPerfiles() : Observable<PerfilProfesionalResponse> {
      return this.http.get<PerfilProfesionalResponse>(ConstantesGenerales.URL_API_CAT_PERFILES);
    }

}
