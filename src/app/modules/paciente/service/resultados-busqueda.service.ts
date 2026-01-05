import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusquedaPacientesResponseDTO } from '../interfaces/response/busq-pacientes-response.interface';
import { BusquedaPacienteRequestDTO } from '../interfaces/request/busq-pacientes-request.interface';
import { BusquedaPacientesRepository } from '../../../core/repositories/busqueda-paciente.repository';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para busqueda de pacientes
*/
export class ResultadosBusquedaService {
  // constructor(private repository: BusquedaPacientesRepository) { }

  // async getData(data: IBusqPacientesRequest): Promise<IBusqPacientesResponse[]> {
  //   // return null;
  //    return this.repository.getAll(data).toPromise().then(response => response ?? []);
  //   // return this.http.get<IBusquedaPacientes[]>(this.jsonURL);
  // }
}

/**
 *
 * import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatOcupacionesService {
  private jsonURL = 'assets/cat-js/data-cat-ocupaciones.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
 *
 *
 */
