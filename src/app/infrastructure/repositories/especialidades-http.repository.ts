import { Injectable } from "@angular/core";
import { EspecialidadesRepository } from "../../core/repositories/especialidades.repository";
import { HttpClient } from '@angular/common/http';
import { EspecialidadMedicaResponse } from "../../modules/paciente/interfaces/response/especialidad-med-response.interface";
import { Observable } from "rxjs";
import { ConstantesGenerales } from "../../utils/constantes-generales";

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesHttpRepository extends EspecialidadesRepository {

  constructor(private http: HttpClient) {
    super();
  }


  override obtenerTodasLasEspecialidades(): Observable<EspecialidadMedicaResponse> {
    return this.http.get<EspecialidadMedicaResponse>(ConstantesGenerales.URL_API_CAT_ESPECIALIDADES);
  }
/***    this.http.post<IAltaPersonalRequest>(ConstantesGenerales.URL_API_ALTA_PERSONAL, altaPersonalDTO)
      .subscribe(
        response => console.log('API Response:', response),
        error => console.error('API Error:', error)
      ); */


      /**
       *   getData(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
       *
       */
}
