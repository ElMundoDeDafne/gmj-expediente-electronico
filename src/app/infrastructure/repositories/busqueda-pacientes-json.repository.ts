// src/app/infrastructure/repositories/busqueda-pacientes-json.repository.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BusquedaPacientesRepository } from '../../core/repositories/busqueda-paciente.repository';
import { BusquedaPacienteDTO } from '../../modules/paciente/interfaces/busqueda-paciente.interface';
import { IBusquedaPacientes } from '../../modules/paciente/interfaces/busqueda/busqueda-pacientes.interface';
import { BusquedaPacienteRequestDTO } from '../../modules/paciente/interfaces/request/busq-pacientes-request.interface';
import { BusquedaPacientesResponseDTO } from '../../modules/paciente/interfaces/response/busq-pacientes-response.interface';
import { ConstantesGenerales } from '../../utils/constantes-generales';

@Injectable({
  providedIn: 'root'
})
export class BusquedaPacientesHttpRepository extends BusquedaPacientesRepository {

  override search(data: BusquedaPacienteRequestDTO): Observable<BusquedaPacientesResponseDTO[]> {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
    super();
  }

  private readonly jsonURL = 'assets/cat-js/resultados-busqueda.json';

    override getAll(data: BusquedaPacienteRequestDTO): Observable<BusquedaPacientesResponseDTO[]> {
      // return this.http.get<IBusquedaPacientes[]>(this.jsonURL);
        return this.http.post<BusquedaPacientesResponseDTO[]>(ConstantesGenerales.URL_API_BUSQ_PACIENTES, data);
    }

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

