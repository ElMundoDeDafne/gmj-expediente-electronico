import { IBusquedaPacientes } from "../modules/paciente/interfaces/busqueda/busqueda-pacientes.interface";
import * as XLSX from "xlsx";

/**
 * Clase con distintos metodos de utileria para el sistema
 *
*/
export class Utilerias{

  hojaExcel! : XLSX.WorkSheet;
  libro! : XLSX.WorkBook;

  calcularIMC(talla : number , peso : number) : number {
    let imcCalculado : number = 0;
    imcCalculado = peso / Math.pow(talla,2);
    return imcCalculado;
  }

  generarExcelPxs(datos : IBusquedaPacientes[]) : void {
      const now = new Date();
      const year = now.getFullYear();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const nombre = `${year}${day}${month}${hours}${minutes}${seconds}.xlsx`;

      this.hojaExcel = XLSX.utils.json_to_sheet(datos);
      this.libro = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(this.libro,this.hojaExcel,'Datos');
      XLSX.writeFile(this.libro,nombre);
  }

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
