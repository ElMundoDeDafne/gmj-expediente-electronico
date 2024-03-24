import { Component } from '@angular/core';
import { IAntecedentesPersNoPat } from '../../../../interfaces/antecedentes-p-npat.interface';

@Component({
  selector: 'app-antecedentes-pers-np-form',
  templateUrl: './antecedentes-pers-np-form.component.html',
  styleUrl: './antecedentes-pers-np-form.component.css'
})
export class AntecedentesPersonalesNoPatologicosFormComponent {
  antecedentesPersNoPat:IAntecedentesPersNoPat={concepto:[
    {
      concepto:'dieta',
      situacion:''
    },
    {
      concepto:'vivienda',
      situacion:''
    },
    {
      concepto:'servicios',
      situacion:''
    },
    {
      concepto:'mascotas',
      situacion:''
    },
    {
      concepto:'faunaNociva',
      situacion:''
    },
    {
      concepto:'promiscuidad',
      situacion:''
    },
    {
      concepto:'hacinamiento',
      situacion:''
    }
  ]};
}
