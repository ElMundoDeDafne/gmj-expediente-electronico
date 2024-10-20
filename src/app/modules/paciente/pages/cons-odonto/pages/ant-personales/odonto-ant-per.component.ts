import { Component } from "@angular/core";
import { Utilerias } from "../../../../../../utils/utilerias";

@Component({
  selector: 'app-odonto-ant-per',
  templateUrl: 'odonto-ant-per.component.html',
})

export class OdontoPerComponent {

  constructor(){
    this.utils=new Utilerias();
  }

  antecedentesChkbox:string[]=['Diabetico','Hipertennso','asmatico','vih/sida','tuberculoso','cardiopata','quirurgico','alergias','hepatitis','hemofilico','cardiovasculares','otros'];
  selecciones:string[]=[];
  observaciones:string='';
  antecEspecifico!:string;
  utils:Utilerias;

  contieneOtros(sel:string[]):boolean {
    return sel.some(s=>s.toLowerCase() === 'otros');
  }

  onCheckboxChange(event: any) {
    const opcion = event.target.value;
    const isChecked = event.target.checked;

    // Agrega la opción seleccionada o quita la deseleccionada del array
    if (isChecked) {
      this.selecciones.push(opcion);
    } else {
      const index = this.selecciones.indexOf(opcion);
      if (index > -1) {
        this.selecciones.splice(index, 1); // Elimina el elemento del array
      }
    }
  }
}
