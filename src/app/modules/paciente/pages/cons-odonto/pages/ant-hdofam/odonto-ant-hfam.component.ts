import { Component } from "@angular/core";
import { Utilerias } from "../../../../../../utils/utilerias";

@Component({
  selector: 'app-odonto-ant-hfam',
  templateUrl: 'odonto-ant-hfam.component.html',
})

export class OdontoHFamComponent {

  constructor(){
    this.utils = new Utilerias();
  }
  antecedentesChkbox:string[]=['Diabetes','Hipertension','asma','vih/sida','hemofilia','epilepsia','tuberculosis','malformaciones congenitas','cardiopatias','neoplasias','otros'];
  selecciones:string[]=[];
  observaciones:string='';
  utils:Utilerias;
  antecEspecifico!:string;

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
