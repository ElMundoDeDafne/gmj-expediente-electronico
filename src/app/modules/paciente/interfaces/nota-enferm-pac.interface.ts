import { ISignosVitales } from "./signos-vitales-paciente.interface";

export interface INotaEnfermeriaPac {
  accionesDxEnf?:string;
  accionesNEnf?:string;
  resultadosNEnf?:string;
  realizoNEnf?:string;
  cedulaProfNEnf?:string;
  signosVitales?:ISignosVitales;
}
