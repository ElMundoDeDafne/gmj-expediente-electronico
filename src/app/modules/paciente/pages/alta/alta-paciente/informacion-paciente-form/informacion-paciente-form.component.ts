import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { IPaciente } from '../../../../interfaces/paciente.interface';
import { ISignosVitales } from '../../../../interfaces/signos-vitales-paciente.interface';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


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
 // infoPacienteForm : FormGroup;

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  // @Input() paciente: IPaciente ={};
  paciente: IPaciente={};
  onChange: any = () => {};
  onTouched: any = () => {};

   writeValue(obj: IPaciente): void {
     this.paciente = obj;
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
