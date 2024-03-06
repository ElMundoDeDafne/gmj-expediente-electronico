import { Component, ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Paciente } from '../../../../interfaces/paciente.interface';


@Component({
  selector: 'app-informacion-paciente-form',
  templateUrl: './informacion-paciente-form.component.html',
  styleUrl: './informacion-paciente-form.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class InformacionPacienteFormComponent {
   dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
     // Only highligh dates inside the month view.
     if (view === 'month') {
       const date = cellDate.getDate();

  //     // Highlight the 1st and 20th day of each month.
  //     // return date === 1 || date === 20 ? 'example-custom-date-class' : '';
     }

     return '';
   };

    public paciente : Paciente = {
      motivoConsulta:'',
      nacionalidad:'Mexicano',
      edad:0
    }
}
