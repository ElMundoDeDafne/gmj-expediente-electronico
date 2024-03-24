import { Component } from '@angular/core';
import { IEnfermedades } from '../../../../interfaces/enfermedades.interface';

@Component({
  selector: 'app-antecedentes-personales-pat-form',
  templateUrl: './antecedentes-personales-pat-form.component.html',
  styleUrl: './antecedentes-personales-pat-form.component.css'
})
export class AntecedentesPersonalesPatFormComponent {
  enfermedades:IEnfermedades[]=[{}];

  agregarInput():void{
    const nuevaEnfermedad:IEnfermedades={
      nombreEnfermedad:"",
      tipoEnfermedad:"",
      tiempoEvolucion:"",
      tratamientoLlevado:"",
      otraEnfermedad:""
    };
    this.enfermedades.push(nuevaEnfermedad);
  }

  eliminar(pos:number):void{
    this.enfermedades.splice(pos,1);
  }

}
