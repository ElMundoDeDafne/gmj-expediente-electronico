import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { IInfoPaciente, IPaciente } from '../../../../interfaces/paciente.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-paciente-form',
  templateUrl: './informacion-paciente-form.component.html',
  styleUrl: './informacion-paciente-form.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InformacionPacienteFormComponent),
    multi: true
  },provideNativeDateAdapter()],
})
export class InformacionPacienteFormComponent implements ControlValueAccessor, OnInit{
  fechaSeleccionada : Date = new Date();
  picker : any;

  asignarPicker(picker: any) {
    this.picker = picker;
  }
 // infoPacienteForm : FormGroup;

  bsValue : Date = new Date();

  informacionPacienteForm : FormGroup;
  constructor(private formBuilder : FormBuilder){
    this.informacionPacienteForm = this.formBuilder.group({
      meses:['',[Validators.min(1),Validators.max(12),Validators.pattern('^-?[0-9]+$|^RN$')]],
      edad: ['',[Validators.min(0),Validators.max(110),Validators.pattern('^-?[0-9]+$'),Validators.required]],
      tipoConsulta:['',[Validators.requiredTrue]],
      esDerechoHabiente:['',[Validators.required]],
      primerNombre:['',[Validators.required]],
      apellidoPaterno:['',[Validators.required]],
      apellidoMaterno:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required,Validators.pattern('^(0[1-9]\|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/\\d{4}$')]],
      motivoConsulta:['',[Validators.required]],
      curp:['',[Validators.required,Validators.pattern('^[A-Z]{4}\d{6}[A-Z]{2}[A-Z]{3}[A-Z]\d{2}$'),Validators.maxLength(18)]]
    });
  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  informacionPx:IInfoPaciente={};
  onChange: any = () => {};
  onTouched: any = () => {};

  validarMesesCero() {

  }

  guardarEnLocalStorage(genero:string):void{
    localStorage.setItem("GEN_PX", genero);
  }

  calcularEdad(fechaNacimiento:string):void{
    console.error(fechaNacimiento);
    const birthdayDate : Date = new Date(fechaNacimiento);
    const hoy : Date = new Date();
    let edad:number = hoy.getFullYear() - birthdayDate.getFullYear();
    let meses:number = hoy.getMonth() - birthdayDate.getMonth();

    // Corregir la edad si el mes de nacimiento es mayor que el mes actual
    if (meses < 0) {
      edad--;
      meses = 12 + meses;
    }

    // Corregir la edad si el día de nacimiento es mayor que el día actual
    if (hoy.getDate() < birthdayDate.getDate()) {
      meses--;
    }

    this.informacionPx.edad = edad;
    this.informacionPx.meses = edad===0?'RN':meses.toString();
  }

  limpiaDerechoHabiencia(texto:string):void{
    // this.paciente.derechoHabiencia=texto;
  }

  // limpiaOtraDerechoHabiencia():void{
  //   this.paciente.otraDerechoHabiencia='';
  // }

   writeValue(obj: IInfoPaciente): void {
     this.informacionPx = obj;
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

   dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
     // Only highligh dates inside the month view.
     if (view === 'month') {
       const date = cellDate.getDate();

  //     // Highlight the 1st and 20th day of each month.
  //     // return date === 1 || date === 20 ? 'example-custom-date-class' : '';
     }

     return '';
   };

}
