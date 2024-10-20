/**
 * Clase con distintos metodos de utileria para el sistema
 *
*/
export class Utilerias{
  convertirAMayusculas(event: Event): void {
    const input = event.target as HTMLInputElement;
    setTimeout(() => {
      input.value.toUpperCase();
    },0);
  }
}
