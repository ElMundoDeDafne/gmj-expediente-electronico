import { IPaciente } from "./paciente.interface";

export interface IConsultaEstomatologia{
  hojaFrontalOdonto?:IHojaFrontalOdonto;
  antecedentesPersonales?:IAntecedentesPers;
  antecedentesFam?:IAntFamiliares;
  domicilio?:IDomicilioOdonto;
  observaciones?:IObservacionesOdontologia;
}

interface IObservacionesOdontologia {
  fechaConsulta?:Date;
  observacionesLabios?:string;
  observacionesPaladar?:string;
  observacionesEncias?:string;
  observacionesPisoBoca?:string;
  observacionesGenerales?:string;
  carrillos?:string;
  observacionesArticulacionTempMand?:string;
  observacionesLengua?:string;
  tieneGingivitis?:boolean;
  tienePeriodontitis?:boolean;
  tieneMovilidad?:boolean;
  otros?:string;
}

interface IHojaFrontalOdonto {
  fechaConsulta?: Date;
  nombreUno?:string;
  nombreDos?:string;
  edad?:number;
  sexo?:string;
  fechaNacimiento?:Date;
  motivoConsulta?:string;
  estadoCivil?:string;
  fechaUltimoExamenMedico?:Date;
}

interface IDomicilioOdonto {
  callePrincipal?:string;
  entreCalles?:string;
  codigoPostal?:string;
  municipio?:string;
  localidad?:string;
  estado?:string;
}

interface IAntFamiliares{
  enfermedades?:string[];
  observaciones?:string;
}

interface IAntecedentesPers{
  enfermedades?:string[];
  observaciones?:string;
}
