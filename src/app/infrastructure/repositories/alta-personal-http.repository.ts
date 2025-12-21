import { Injectable } from "@angular/core";
import { AltaPersonalRepository } from "../../core/repositories/alta-personal.repository";
import { AltaPersonalDTO } from "../../modules/personal/interfaces/alta-personal.interface";
import { HttpClient } from "@angular/common/http";
import { ConstantesGenerales } from "../../utils/constantes-generales";
import { IAltaPersonalRequest } from "../../modules/paciente/interfaces/request/alta-personal-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AltaPersonalHttpRepository extends AltaPersonalRepository {
  constructor(private http: HttpClient) {
    super();
  }


  override registrarNuevoPersonal(altaPersonalDTO: IAltaPersonalRequest): void {
    this.http.post<IAltaPersonalRequest>(ConstantesGenerales.URL_API_ALTA_PERSONAL, altaPersonalDTO)
      .subscribe(
        response => console.log('API Response:', response),
        error => console.error('API Error:', error)
      );
  }
  // getAll(): Observable<BusquedaPaciente[]> {
  //   return this.http.get<BusquedaPacienteDTO[]>(this.jsonURL).pipe(
  //     map(dtos => dtos.map(dto => this.mapToDomain(dto))),
  //     catchError(error => {
  //       console.error('Error loading patients from JSON:', error);
  //       return of([]);
  //     })
  //   );
  // }



}
