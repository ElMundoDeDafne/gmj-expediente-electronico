import { Component, forwardRef } from '@angular/core';
import { IEsquemaVacunacionPac } from '../../../../interfaces/esquema-vac-pac.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inmunizaciones-form',
  templateUrl: './inmunizaciones-form.component.html',
  styleUrl: './inmunizaciones-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => this),
    multi: true
  }]
})
export class InmunizacionesFormComponent implements ControlValueAccessor {
  inmunizacion:IEsquemaVacunacionPac={};
  inmunizaciones:IEsquemaVacunacionPac[]=[{}];

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: IEsquemaVacunacionPac): void {
    this.inmunizacion = obj;
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
    const nuevoAntecedente:IEsquemaVacunacionPac={
      fechaAplicacion:'',
      biologicoNombre:''
    };
    this.inmunizaciones.push(nuevoAntecedente);
  }

  eliminar(pos:number):void{
    this.inmunizaciones.splice(pos,1);
  }

}
