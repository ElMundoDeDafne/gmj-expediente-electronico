import { PacAntHdoFamiliar } from "./antecedentes-heredo-fam.interface";
import { EsquemaVacunacionPac } from "./esquema-vac-pac.interface";
import { PacMorbilidadPaciente } from "./morbilidad.interface";
import { Persona } from "./persona.interface";

export interface Paciente extends Persona{
  idPaciente?:number;
  motivoConsulta?:string;
  fechaIngreso?:string;
  fechaAlta?:string;
  morbilidades?:PacMorbilidadPaciente[];
  pesoRegistrado?:number;
  talla?:number;
  imc?:number;
  folio?:string;
  cama?:string; //opcional, puede que no se interne
  antecedentesHdoFam?:PacAntHdoFamiliar[];
  esquemaVacunacion?:EsquemaVacunacionPac[]; //el px puede tener varios biologicos en su cartilla
  cuentaConCartilla?:boolean;
  tieneMorbilidades?:boolean;

}
