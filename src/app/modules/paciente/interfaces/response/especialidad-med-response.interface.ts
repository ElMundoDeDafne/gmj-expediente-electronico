export interface EspecialidadMedicaResponse {
  datos:ICatEspecialidadesResponseDatos[];
}

interface ICatEspecialidadesResponseDatos {
  codigoEspecialidad:string;
  descripcionEspe:string;
}
