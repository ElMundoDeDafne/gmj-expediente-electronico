
import { Observable } from 'rxjs';
import { IBusquedaPacientes } from '../../modules/paciente/interfaces/busqueda/busqueda-pacientes.interface';
import { BusquedaPacienteDTO } from '../../modules/paciente/interfaces/busqueda-paciente.interface';
import { AltaPersonalDTO } from '../../modules/personal/interfaces/alta-personal.interface';

/**
 * Puerto/Interface que define cómo acceder a datos de pacientes
 * No importa si vienen de JSON, API REST, GraphQL, localStorage, etc.
 */
export abstract class AltaPersonalRepository {
  abstract registrarNuevoPersonal(altaPersonalDTO:AltaPersonalDTO) : void;
  //abstract buscarPersonalPorId
}
