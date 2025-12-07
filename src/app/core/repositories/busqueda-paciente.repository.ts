
import { Observable } from 'rxjs';
import { IBusquedaPacientes } from '../../modules/paciente/interfaces/busqueda/busqueda-pacientes.interface';
import { BusquedaPacienteDTO } from '../../modules/paciente/interfaces/busqueda-paciente.interface';
import { BusquedaPacienteRequestDTO } from '../../modules/paciente/interfaces/request/busq-pacientes-request.interface';
import { BusquedaPacientesResponseDTO } from '../../modules/paciente/interfaces/response/busq-pacientes-response.interface';
import { Injectable } from '@angular/core';

/**
 * Puerto/Interface que define cómo acceder a datos de pacientes
 * No importa si vienen de JSON, API REST, GraphQL, localStorage, etc.
 */

export abstract class BusquedaPacientesRepository {
  abstract getAll(data: BusquedaPacienteRequestDTO): Observable<BusquedaPacientesResponseDTO[]>;
  //abstract getById(id: string): Observable<BusquedaPaciente | null>;
  abstract search(data: BusquedaPacienteRequestDTO): Observable<BusquedaPacientesResponseDTO[]>;
  //abstract getByExpediente(numeroExpediente: string): Observable<BusquedaPaciente | null>;
}
