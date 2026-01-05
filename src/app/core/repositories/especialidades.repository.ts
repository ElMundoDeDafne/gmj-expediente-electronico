import { Observable } from "rxjs";
import { EspecialidadMedicaResponse } from "../../modules/paciente/interfaces/response/especialidad-med-response.interface";

export abstract class EspecialidadesRepository {
  /**
   *
   * Se obtienen todas las especialidades médicas.
   */
  abstract obtenerTodasLasEspecialidades(): Observable<EspecialidadMedicaResponse>;
}
