import { Component } from '@angular/core';
import { IAntecedentesPersNoPat, IConceptoAntecedente } from '../../../../interfaces/antecedentes-p-npat.interface';
import { stringify } from 'querystring';

@Component({
  selector: 'app-antecedentes-pers-np-form',
  templateUrl: './antecedentes-pers-np-form.component.html',
  styleUrl: './antecedentes-pers-np-form.component.css'
})
export class AntecedentesPersonalesNoPatologicosFormComponent {
  conceptoAnt:IConceptoAntecedente={
    concepto:'',
    situacion:''
  }

  antecedentes:IAntecedentesPersNoPat={
    conceptoFauna:[],
    conceptoVivienda:[],
    concepto:[
      {concepto:'Dieta',situacion:''},
      {concepto:'Vivienda',situacion:''},
      {concepto:'Promiscuidad',situacion:''},
      {concepto:'Hacinamiento',situacion:''}
    ]
  };
  sumarPalabras(sit:string){

  }

  agregarConcepto(concepto:string,descripcion:string){
    //this.antecedentes.push(this.antecedente);
  }
}
