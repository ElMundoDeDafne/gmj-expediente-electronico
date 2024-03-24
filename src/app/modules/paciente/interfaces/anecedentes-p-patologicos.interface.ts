import { IEnfermedades } from "./enfermedades.interface";

/**
 * Interfaz para definir los Antecedentes Personales Patologicos por paciente.
 * @author Christian Castillo
 */
export interface IAntecedentesPersonalesPatologicos {
  enfermedades?:IEnfermedades[];
}
