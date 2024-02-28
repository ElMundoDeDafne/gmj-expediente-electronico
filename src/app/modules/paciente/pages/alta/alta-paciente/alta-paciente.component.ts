import { Component,ViewEncapsulation } from '@angular/core';
import { Paciente } from '../../../interfaces/paciente.interface';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrl: './alta-paciente.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class AltaPacienteComponent {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      // return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  public paciente : Paciente = {
    motivoConsulta:'',
  }
}
