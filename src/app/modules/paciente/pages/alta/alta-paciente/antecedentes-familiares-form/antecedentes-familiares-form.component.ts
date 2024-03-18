import { Component } from '@angular/core';
import { IPacAntHdoFamiliar } from '../../../../interfaces/antecedentes-heredo-fam.interface';

@Component({
  selector: 'app-antecedentes-familiares-form',
  templateUrl: './antecedentes-familiares-form.component.html',
  styleUrl: './antecedentes-familiares-form.component.css'
})
export class AntecedentesFamiliaresFormComponent {
  antecdenteHedoFamiliar:IPacAntHdoFamiliar={};
  antecedentesHeredoFamiliares:IPacAntHdoFamiliar[]=[{}];

  agregarInput():void{
    const nuevoAntecedente:IPacAntHdoFamiliar={
      parentesco:"",
      familiar:"",
      morbilidadFamilar:""
    };
    this.antecedentesHeredoFamiliares.push(nuevoAntecedente);
  }
}
