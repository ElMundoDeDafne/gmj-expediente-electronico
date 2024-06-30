import { Component, forwardRef } from '@angular/core';
import { IAntecedentesPersNoPat, IConceptoAntecedente } from '../../../../interfaces/antecedentes-p-npat.interface';
import { stringify } from 'querystring';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-antecedentes-pers-np-form',
  templateUrl: './antecedentes-pers-np-form.component.html',
  styleUrl: './antecedentes-pers-np-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AntecedentesPersonalesNoPatologicosFormComponent),
    multi: true
  }]
})
export class AntecedentesPersonalesNoPatologicosFormComponent implements ControlValueAccessor{
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      antecEspecifico:['',[Validators.required]]
    });
  }
  conceptoAnt:IConceptoAntecedente={
    concepto:'',
    situacion:''
  }

  antecedentes:IAntecedentesPersNoPat={
    conceptoFauna:[],
    conceptoVivienda:[],
    concepto:[],
    inmunizaciones:[{}]
  };
  antecentesPers:IAntecedentesPersNoPat[]=[];
  form : FormGroup;

  onChange: any = () => {};
  onTouched: any = () => {};


  writeValue(obj: IAntecedentesPersNoPat): void {
    this.antecedentes = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }


  sumarPalabras(sit:string){

  }

  agregarConcepto(){
    this.antecentesPers.push(this.antecedentes);
  }
}
