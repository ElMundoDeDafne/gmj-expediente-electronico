import { Component, OnInit, forwardRef } from '@angular/core';
import { IEnfermedades } from '../../../../interfaces/enfermedades.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Utilerias } from '../../../../../../utils/utilerias';

@Component({
  selector: 'app-antecedentes-personales-pat-form',
  templateUrl: './antecedentes-personales-pat-form.component.html',
  styleUrl: './antecedentes-personales-pat-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AntecedentesPersonalesPatFormComponent),
    multi: true
  }]
})
export class AntecedentesPersonalesPatFormComponent implements ControlValueAccessor, OnInit{
  ngOnInit() {

  }
  antecedentesPersPatForm : FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.antecedentesPersPatForm = formBuilder.group({
      otraEnfermedad:['',[Validators.required]]
    });
    this.utils = new Utilerias();
  }
  utils : Utilerias;
  enfermedades:IEnfermedades[]=[{}];
  enfermedad:IEnfermedades={
    nombreEnfermedad:'',
    tipoEnfermedad:'',
    tiempoEvolucion:'',
    tratamientoLlevado:'',
    otraEnfermedad:''
  };
  onChange: any = () => {};
  onTouched: any = () => {};


  writeValue(obj: IEnfermedades[]): void {
    this.enfermedades = obj;
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
    this.enfermedades.push(this.enfermedad);
  }

  eliminar(pos:number):void{
    this.enfermedades.splice(pos,1);
  }

}
