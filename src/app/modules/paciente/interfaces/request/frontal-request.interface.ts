import { IDatosContactoPaciente } from "../datos-contacto-paciente.interface";
import { IDomicilioPaciente } from "../domicilio-paciente.interface";
import { IHistClinica, IInfoPaciente } from "../paciente.interface";

/***
 * Interface para el request de receta medica
 *
 */
export interface IHojaFrontalRequest {
  informacionPx : IInfoPaciente;
  domicilioPaciente : IDomicilioPaciente;
  datosContacto : IDatosContactoPaciente;
  historiaClinica : IHistClinica;
}
