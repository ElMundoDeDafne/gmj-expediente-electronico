import { IPacAntHdoFamiliar } from "./antecedentes-heredo-fam.interface";
import { IDomicilioPaciente } from "./domicilio-paciente.interface";
import { IEsquemaVacunacionPac } from "./esquema-vac-pac.interface";
import { IPacMorbilidadPaciente } from "./morbilidad.interface";
import { IPersona } from "./persona.interface";
import { ISignosVitales } from "./signos-vitales-paciente.interface";
import { IAntecedentesGinecoObstetricos } from "./antecedentes-g-obstetricos.interface";
import { IDatosContactoPaciente } from "./datos-contacto-paciente.interface";
import { IAntecedentesPersonalesPatologicos } from './anecedentes-p-patologicos.interface';
import { IAntecedentesPersNoPat } from './antecedentes-p-npat.interface';

export interface IPaciente extends IPersona{
  idPaciente?:number;
  motivoConsulta?:string;
  fechaIngreso?:string;
  fechaAlta?:string;
  morbilidades?:IPacMorbilidadPaciente[];
  pesoRegistrado?:number;
  talla?:number;
  imc?:number;
  folio?:string;
  cama?:string; //opcional, puede que no se interne
  antecedentesHdoFam?:IPacAntHdoFamiliar[];
  esquemaVacunacion?:IEsquemaVacunacionPac[]; //el px puede tener varios biologicos en su cartilla
  antecedentesHdoFamiliares?:IPacAntHdoFamiliar[];
  cuentaConCartilla?:boolean;
  tieneMorbilidades?:boolean;
  tipoSangre?:string;
  folioPaciente?:string;
  temperatura?:string;
  signosVitales?:ISignosVitales;
  domicilioPaciente?:IDomicilioPaciente;
  tipoConsulta?:string;
  antecedentesGinecobstetricos?:IAntecedentesGinecoObstetricos;
  antecPatologicos?:IAntecedentesPersonalesPatologicos[];
  antecNoPatologicos?:IAntecedentesPersNoPat[];
  cuentaConDerechoHabiencia?:boolean;
  otraDerechoHabiencia?:string;
}
