/**Clase con constantes globales o generales para la aplicación */
export class ConstantesGenerales{
  static readonly NOMBRE_APP:string = 'Grupo Medico Jacala';
  static readonly VERSION_APP:string='1.0.0';
  //Claves para interrogatorio
  static readonly CLAVE_SINTOMAS_GENERALES:string='SINT_GEN';
  static readonly CLAVE_PIEL_FANERAS:string='PIELFAN';
  /** Endpoint para manejo de todos los microservicios a consumir */
  static readonly BASE_API_ORQ_ENDPOINT:string ='http:localhost:8088/api/pacientes/v1.0/hoja';
  static readonly URL_API_REPORTES:string = 'http://localhost:8089/api/reportes/v1.0/reporte/get';
  static readonly URL_API_FRONTAL:string = 'http://localhost:8088/api/frontal/v1.0/registro/get';
  static readonly URL_API_CAT_POSTAL:string = 'http://localhost:8089/api/catalogos/v1.0/postal/get';
  static readonly URL_API_BUSQ_PACIENTES:string = 'http://localhost:8090/api/v1/paciente/busqueda/get';
  static readonly URL_API_CAT_ESPECIALIDADES:string = 'http://localhost:8091/api/cat/v1.0/esp/get';

}
