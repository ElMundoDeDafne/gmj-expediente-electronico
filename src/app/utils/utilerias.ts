/**
 * Clase con distintos metodos de utileria para el sistema
 *
*/
export class Utilerias{
  convertirAMayusculas(event: Event): void {
    const input = event.target as HTMLInputElement;
    setTimeout(() => {
      input.value = input.value.toUpperCase();
    },1);
  }

  formatIsoDateToDDMMYYYY(isoDateString: string): string {
    // Crear un objeto Date a partir de la cadena ISO
    const date = new Date(isoDateString);

    // Obtener el día, mes y año
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
    const year = date.getFullYear();

    // Retornar el formato DD/MM/YYYY
    return `${day}/${month}/${year}`;
}

  dateToString(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0'); // Obtiene el día y asegura que tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtiene el mes (0-11) y lo convierte a (1-12)
    const year = date.getFullYear(); // Obtiene el año
    return `${day}/${month}/${year}`; // Devuelve la fecha en el formato dd/MM/yyyy
  }

  getLastMonday(date: Date): string {
   const dayOfWeek = date.getDay();
   const daysToSubtract = (dayOfWeek + 6) % 7; // Para que si es domingo (0), restemos 6 días
   date.setDate(date.getDate() - daysToSubtract);

   // Formatear la fecha a dd/mm/yyyy
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes empieza en 0
   const year = date.getFullYear();

   return `${year}-${month}-${day}T08:00:00`;
  }
}
