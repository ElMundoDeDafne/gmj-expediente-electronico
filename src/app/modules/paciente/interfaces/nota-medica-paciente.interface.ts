/**Interfaz para nota medica */
export interface INotaMedicaPac {
  fechaYHora?:Date;
  exploracion?:string;
  hallazgos?:string;
  diagnosticos?:string[];
  recomendaciones?:string;
  tratamientos?:string[];
  cedulaProfNM?:string;
  realizoNM?:string;
  impresionDiagnostica?:string[];
  resultados?:string;
  analisisYComentarios?:string;
  tratamiento?:string;
}
