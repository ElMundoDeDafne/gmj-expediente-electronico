/**Interfaz para antecedentes ginecobtetricos */
export interface IAntecedentesGinecoObstetricos {
  menarca?:string;
  inicioVidaSexual?:string;
  hijosVivos?:number;
  numGestas?:number;
  numAborts?:number;
  numPartos?:number;
  numCesareas?:number;
  fechaUltimaRegla?:string;
  fechaUltimaCitologia?:string;
  fechaUltimoParto?:string;
}
