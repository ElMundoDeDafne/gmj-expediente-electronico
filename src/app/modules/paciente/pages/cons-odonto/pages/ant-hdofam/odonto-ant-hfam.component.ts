import { Component } from "@angular/core";

@Component({
  selector: 'app-odonto-ant-hfam',
  templateUrl: 'odonto-ant-hfam.component.html',
})

export class OdontoHFamComponent {
  antecedentesChkbox:string[]=['Diabetes','Hipertension','asma','vih/sida','hemofilia','epilepsia','tuberculosis','malformaciones congenitas','cardiopatias','neoplasias','otros'];
  selecciones:string[]=[];
  observaciones:string='';

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
