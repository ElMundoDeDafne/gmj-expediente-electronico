import { IPacAntHdoFamiliar } from "./antecedentes-heredo-fam.interface";
import { IDomicilioPaciente } from "./domicilio-paciente.interface";
import { IEsquemaVacunacionPac } from "./esquema-vac-pac.interface";
import { IPacMorbilidadPaciente } from "./morbilidad.interface";
import { IPersona } from "./persona.interface";
import { IAntecedentesGinecoObstetricos } from "./antecedentes-g-obstetricos.interface";
import { IAntecedentesPersonalesPatologicos } from './anecedentes-p-patologicos.interface';
import { IAntecedentesPersNoPat } from './antecedentes-p-npat.interface';
import { INotaMedicaPac } from "./nota-medica-paciente.interface";
import { INotaEnfermeriaPac } from "./nota-enferm-pac.interface";
import { IInterrogatorioPaciente } from './interrogatorio-p.interface';
import { IDatosContactoPaciente } from "./datos-contacto-paciente.interface";
import { IConsultaEstomatologia } from "./cons-estomatologia.interface";

/**Paciente interfaz */
export interface IPaciente{
  hojaFrontal:IHojaFrontal;
  historiaClinica:IHistClinica;
  notaMedicaPaciente:INotaMedicaPac;
  notaEnfermeriaPx:INotaEnfermeriaPac;
  consultaOdontologia:IConsultaEstomatologia;
}

export interface IHojaFrontal{
  informacionPx:IInfoPaciente;
  domicilioPaciente:IDomicilioPaciente;
  datosContacto?:IDatosContactoPaciente;
}

export interface IHistClinica {
  esquemaVacunacion?:IEsquemaVacunacionPac[]; //el px puede tener  en varios biologicossu cartilla
  antecedentesHdoFamiliares?:IPacAntHdoFamiliar[];
  antecedentesHdoFam?:IPacAntHdoFamiliar[];
  antecedentesGinecobstetricos?:IAntecedentesGinecoObstetricos;
  antecPatologicos?:IAntecedentesPersonalesPatologicos[];
  antecNoPatologicos?:IAntecedentesPersNoPat;
  interrogPx?:IInterrogatorioPaciente;
}

export interface IInfoPaciente extends IPersona{
  isValid?:boolean;
  tipoConsulta?:string;
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
  cuentaConDerechoHabiencia?:boolean;
  otraDerechoHabiencia?:string;
  cuentaConCartilla?:boolean;
  tieneMorbilidades?:boolean;
  tipoSangre?:string;
  folioPaciente?:string;
  tieneAlergias?:boolean;
  alergias?:string[];
}
