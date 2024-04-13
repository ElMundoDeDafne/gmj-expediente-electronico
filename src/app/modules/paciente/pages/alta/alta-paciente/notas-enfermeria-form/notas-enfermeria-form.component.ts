import { Component, forwardRef } from '@angular/core';
import { INotaEnfermeriaPac } from '../../../../interfaces/nota-enferm-pac.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-notas-enfermeria-form',
  templateUrl: './notas-enfermeria-form.component.html',
  styleUrl: './notas-enfermeria-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => this),
    multi: true
  }]
})
export class NotasEnfermeriaFormComponent implements ControlValueAccessor{
  notasEnfermerias:INotaEnfermeriaPac[]=[];
  notasEnfermeria:INotaEnfermeriaPac={accionesDxEnf:'',accionesNEnf:'',cedulaProfNEnf:'',realizoNEnf:'',resultadosNEnf:'',signosVitales:{}};
  onChange: any = () => {};
  onTouched: any = () => {};

  agregarNota():void{
    this.notasEnfermerias.push(this.notasEnfermeria);
  }

  writeValue(obj: INotaEnfermeriaPac): void {
    this.notasEnfermeria = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
