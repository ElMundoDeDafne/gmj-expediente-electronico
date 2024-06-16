import { Component, forwardRef } from '@angular/core';
import { INotaEnfermeriaPac } from '../../../../interfaces/nota-enferm-pac.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

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
  notasEnfemeriaForm : FormGroup;
  notasEnfermerias:INotaEnfermeriaPac[]=[];
  notasEnfermeria:INotaEnfermeriaPac={accionesDxEnf:'',accionesNEnf:'',cedulaProfNEnf:'',realizoNEnf:'',resultadosNEnf:'',signosVitales:{}};
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private fb:FormBuilder){
    this.notasEnfemeriaForm = this.fb.group({
      cedulaProfesionalNEnf:['',[Validators.pattern('^-?[0-9]+$'),Validators.required]]
    });
  }


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
