import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para componente pacientes
*/
export class PacienteServiceService {

  constructor() { }

  //Esta URL obtiene listado de empleados desde BE
  // private baseURL = "http://192.168.1.68:7091/api/v1/empleados";
  // constructor(private httpClient : HttpClient) { }

  // //obtiene los empleados
  // obtenerListaDeEmpleados():Observable<Empleado[]>{
  //   return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  // }

  // //registrar empleados
  // registrarEmpleado(empleado : Empleado) : Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, empleado);
  // }

  // actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object> {
  //   return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  // }

  // obtenerEmpleadoPorId(id:number):Observable<Empleado>{
  //   return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  // }

  // eliminarempleado(id:number):Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

}
