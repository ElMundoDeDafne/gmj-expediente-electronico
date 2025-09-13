export interface IAltaPersonalRequest {
  primerNombre : string;
  segundoNombre?: string;
  apellidoPaterno : string;
  apellidoMaterno : string;
  cedulaProfesional : string;
  tipoPersonal : string;
  especialidad : string;
  especialidadOtro ? : string;
  fechaNacimiento : string;
  curp : string;
}
