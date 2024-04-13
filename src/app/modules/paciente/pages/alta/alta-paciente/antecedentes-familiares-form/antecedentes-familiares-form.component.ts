import { Component, forwardRef } from '@angular/core';
import { IPacAntHdoFamiliar } from '../../../../interfaces/antecedentes-heredo-fam.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-antecedentes-familiares-form',
  templateUrl: './antecedentes-familiares-form.component.html',
  styleUrl: './antecedentes-familiares-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AntecedentesFamiliaresFormComponent),
    multi: true
  }]
})
export class AntecedentesFamiliaresFormComponent implements ControlValueAccessor{
  antecedentesHdoFamiliares:IPacAntHdoFamiliar[]=[{}];

  onChange: any = () => {};
  onTouched: any = () => {};

   writeValue(obj: IPacAntHdoFamiliar[]): void {
     this.antecedentesHdoFamiliares = obj;
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

  agregarInput():void{
    const nuevoAntecedente:IPacAntHdoFamiliar={
      parentesco:"",
      familiar:"",
      morbilidadFamilar:""
    };
    this.antecedentesHdoFamiliares.push(nuevoAntecedente);
  }

  eliminar(pos:number):void{
    this.antecedentesHdoFamiliares.splice(pos,1);
  }
}
