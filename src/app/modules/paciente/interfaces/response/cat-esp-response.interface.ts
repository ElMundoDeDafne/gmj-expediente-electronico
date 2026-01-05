export interface ICatEspecialidadesResponse {
  datos:ICatEspecialidadesResponseDatos[];
}

interface ICatEspecialidadesResponseDatos {
  idEspecialidad:number;
  nombre:string;
  codigo:string;
}
