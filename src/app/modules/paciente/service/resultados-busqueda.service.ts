import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBusquedaPacientes } from '../interfaces/busqueda/busqueda-pacientes.interface';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para busqueda de pacientes
*/
export class ResultadosBusquedaService {
  private jsonURL = 'assets/cat-js/resultados-busqueda.json';
  constructor(private http: HttpClient) { }
  getData(): Observable<IBusquedaPacientes[]> {
    return this.http.get<IBusquedaPacientes[]>(this.jsonURL);
  }
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
