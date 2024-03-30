import { IEsquemaVacunacionPac } from "./esquema-vac-pac.interface";
import { IViviendaPaciente } from "./vivienda-paciente.interface";
/**
 * Antecedentes personales no patologicos
 */
export interface IAntecedentesPersNoPat{
  concepto:IConceptoAntecedente[];
  inmunizaciones?:IEsquemaVacunacionPac[];
  viviendaPaciente?:IViviendaPaciente;
  conceptoFauna:IConceptoAntecedente[];
  conceptoVivienda:IConceptoAntecedente[];
}

export interface IConceptoAntecedente{
  situacion:string;
  concepto:string;
}
