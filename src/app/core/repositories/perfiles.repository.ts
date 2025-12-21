import { Observable } from "rxjs";
import { PerfilProfesionalResponse } from "../../modules/paciente/interfaces/response/perfil-prof-response.interface";

/**Obtenemos los perfiles profesionales del personal. */
export abstract class PerfilesRepository {
    abstract obtenerTodosLosPerfiles() : Observable<PerfilProfesionalResponse>; //aqui hace falta definir el DTO de respuesta
}
