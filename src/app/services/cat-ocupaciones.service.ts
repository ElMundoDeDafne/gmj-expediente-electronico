import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOcupacionPaciente } from '../modules/paciente/interfaces/ocupaciones/ocupacion-pacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class CatOcupacionesService {
  private jsonURL = 'assets/cat-js/data-cat-ocupaciones.json';

  constructor(private http: HttpClient) { }

  async getData(): Promise<any> {
    try {
      const response = await this.http.get<any>(this.jsonURL).toPromise();
      return response;
    } catch(exception) {
      console.error('Error ocurrido al obtener las ocupaciones: ',exception);
    }
  }
}
