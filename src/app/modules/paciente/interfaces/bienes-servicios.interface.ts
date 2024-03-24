/**
 * Interfaz para definir bienes y servicios por paciente por consulta
 *
*/
export interface IBienesServiciosPac {
  cuentaConServBasic?:boolean;
  descripcionServicioBasico?:string[];
  cuentaConTransporte?:boolean;
  descripcionTransporte?:string;
  cuentaConDrenaje?:boolean;
  cuentaConBanio?:boolean;
  descripcionBanio:string;
}
