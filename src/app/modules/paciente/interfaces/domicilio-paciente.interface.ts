import { IDatosContactoPaciente } from "./datos-contacto-paciente.interface";
/**Interfaz domicilio paciente */
export interface IDomicilioPaciente {
  callePrincipal?:string;
  entreCalles1?:string;
  entreCalles2?:string;
  codigoPostal?:string;
  localidad?:string;
  municipio?:string;
  entidad?:string;
  manzana?:string;
  vivienda?:number;
  numeroCalle?:number;
  datosContacto?:IDatosContactoPaciente;
}
