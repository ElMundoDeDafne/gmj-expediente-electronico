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

  conf: DayPilot.CalendarConfig = {
    viewType: "Week",
    startDate: "2024-07-22"
  }

  events:any = [
    { id: 1, start: "2024-07-22T10:00:00", end: "2024-07-22T10:45:00", text: "Cita CYCC | Consulta neurología | Dr. Gerardo A. Borbolla" }
  ]
}
