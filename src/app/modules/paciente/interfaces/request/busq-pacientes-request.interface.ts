export interface IBusqPacientesRequest {
  folio?: string;
  nombre?: string;
  curp?: string;
  localidad?: string;
  edad?: number;
  especialidad?: string;
  medicoTratante?: string;
  tipoBusqueda?: string; // Puede ser 'curp', 'folio', 'nombre', 'localidad', 'especialidad', 'medicotratante'
}
