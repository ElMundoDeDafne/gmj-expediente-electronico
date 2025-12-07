//TODO: Validar si debe de regresar una lista de pacientes o solo uno
export interface BusquedaPacientesResponseDTO {
  exito: boolean;
  folio?: string;
  nombres?: string;
  apellidoPaterno?:string;
  apellidoMaterno?:string;
  curp?: string;
  localidad?: string;
  edad?:number;
  especialidad?:string;
  medicoTratante?:string;
  fechaUltimaVisita?:Date;
  ultimaReceta?:string;
  idPaciente?:number;
}
