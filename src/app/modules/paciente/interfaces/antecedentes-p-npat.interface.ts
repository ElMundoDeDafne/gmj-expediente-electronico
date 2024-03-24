import { IEsquemaVacunacionPac } from "./esquema-vac-pac.interface";
import { IViviendaPaciente } from "./vivienda-paciente.interface";

export interface IAntecedentesPersNoPat{
  concepto?:IConceptoAntecedente[];
  situacion?:string;
  inmunizaciones?:IEsquemaVacunacionPac[];
  viviendaPaciente?:IViviendaPaciente;
}

interface IConceptoAntecedente{
  situacion?:string;
  concepto?:string;
}
