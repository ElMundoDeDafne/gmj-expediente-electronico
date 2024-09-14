/**
 * Interfaz para definir los Antecedentes Personales Patologicos por paciente.
 * @author Christian Castillo
 */
export interface IBusquedaPacientes {
  idPaciente?:number,
  nombres:string,
  apPaterno:string,
  apMaterno:string,
  edad:number,
  especialidad:string,
  medicoTratante:string,
  ultimaVisita:string
}
