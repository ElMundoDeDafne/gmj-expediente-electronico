import { Component, forwardRef, ViewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import {DayPilot, DayPilotCalendarComponent} from "@daypilot/daypilot-lite-angular";

@Component({
  selector: 'app-mostrar-agenda-form',
  templateUrl: './mostrar-agenda-form.component.html',
  styleUrl: './mostrar-agenda-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MostrarAgendaFormComponent),
    multi: true
  }]
})
export class MostrarAgendaFormComponent {
  @ViewChild("calendar")
  calendar!:DayPilotCalendarComponent;
  //de alguna manera configurar la fecha de inicio (startDate)
  conf: DayPilot.CalendarConfig = {
    viewType: "Week",
    startDate: "2024-07-22T08:00:00"
  }

  events: any = [
    {
      id: 1,
      start: "2024-07-22T10:00:00",
      end: "2024-07-22T10:45:00",
      text: "Cita CYCC | Consulta neurología | Dr. Gerardo A. Borbolla"
    }, {
      id:2,
      start:"2024-07-24T10:00:00",
      end:"2024-07-24T10:45:00",
      text:"0111444-DCT|Pediatría|Dra. Aleida Torres S."
    }, {
      id:3,
      start:"2024-08-24T07:00:00",
      end:"2024-08-24T07:35:00",
      text:"0111444-DCT|Pediatría|Dra. Aleida Torres S."
    },
    {
      id:4,
      start:"2024-07-24T07:00:00",
      end:"2024-07-24T07:35:00",
      text:"0111444-DCT|Pediatría|Dra. Aleida Torres S."
    }
  ]
}
