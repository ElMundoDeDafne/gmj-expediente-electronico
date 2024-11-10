import { title } from 'process';
import { Component, forwardRef, ViewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import {DayPilot, DayPilotCalendarComponent} from "@daypilot/daypilot-lite-angular";
import { Utilerias } from "../../../../../utils/utilerias";

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

  constructor(){

  }
  utils : Utilerias = new Utilerias();
  fechaInicio : string = this.utils.getLastMonday(new Date());

  @ViewChild("calendar")
  calendar!:DayPilotCalendarComponent;
  conf: DayPilot.CalendarConfig = {
    viewType: "Week",
    startDate: this.fechaInicio,
    headerDateFormat:"dd/MM/yyyy"
  }

  events: any = [
  {
    id: 1,
    start: "2023-12-01T08:00:00",
    end: "2023-12-01T08:35:00",
    text: "0111444-DCT|Pediatría|Dra. Aleida Torres S."
  },
  {
    id: 2,
    start: "2023-12-05T09:15:00",
    end: "2023-12-05T09:50:00",
    text: "0111445-DCT|Cardiología|Dr. Juan Pérez"
  },
  {
    id: 3,
    start: "2023-12-10T10:30:00",
    end: "2023-12-10T11:05:00",
    text: "0111446-DCT|Dermatología|Dra. Rosa López"
  },
  {
    id: 4,
    start: "2023-12-15T11:45:00",
    end: "2023-12-15T12:20:00",
    text: "0111447-DCT|Neurología|Dr. Carlos Martínez"
  },
  {
    id: 5,
    start: "2023-12-20T14:00:00",
    end: "2023-12-20T14:35:00",
    text: "0111448-DCT|Ginecología|Dra. Beatriz Sánchez"
  },
  {
    id: 6,
    start: "2023-12-25T15:30:00",
    end: "2023-12-25T16:05:00",
    text: "0111449-DCT|Oftalmología|Dr. Sergio Gómez"
  },
  {
    id: 7,
    start: "2024-01-02T16:45:00",
    end: "2024-01-02T17:20:00",
    text: "0111450-DCT|Traumatología|Dra. Paula Martínez"
  },
  {
    id: 8,
    start: "2024-01-08T18:00:00",
    end: "2024-01-08T18:35:00",
    text: "0111451-DCT|Oncología|Dr. Luis García"
  },
  {
    id: 9,
    start: "2024-01-12T19:00:00",
    end: "2024-01-12T19:35:00",
    text: "0111452-DCT|Endocrinología|Dra. Laura Fernández"
  },
  {
    id: 10,
    start: "2024-01-18T08:30:00",
    end: "2024-01-18T09:05:00",
    text: "0111453-DCT|Psicología|Dr. José Martínez"
  },
  {
    id: 11,
    start: "2024-11-02T09:00:00",
    end: "2024-11-02T09:35:00",
    text: "0111454-DCT|Urología|Dra. Elena Ruiz"
  },
  {
    id: 12,
    start: "2024-11-06T10:30:00",
    end: "2024-11-06T11:05:00",
    text: "0111455-DCT|Gastroenterología|Dr. Hugo Ramírez"
  },
  {
    id: 13,
    start: "2024-11-10T11:45:00",
    end: "2024-11-10T12:20:00",
    text: "0111456-DCT|Infectología|Dr. Víctor Castro"
  },
  {
    id: 14,
    start: "2024-11-14T12:30:00",
    end: "2024-11-14T13:05:00",
    text: "0111457-DCT|Radiología|Dra. Patricia Gómez"
  },
  {
    id: 15,
    start: "2024-11-18T13:00:00",
    end: "2024-11-18T13:35:00",
    text: "0111458-DCT|Neumología|Dr. Javier Pérez"
  },
  {
    id: 16,
    start: "2024-11-22T14:45:00",
    end: "2024-11-22T15:20:00",
    text: "0111459-DCT|Hematología|Dra. Isabel Torres"
  },
  {
    id: 17,
    start: "2024-11-01T15:00:00",
    end: "2024-11-01T15:35:00",
    text: "0111460-DCT|Pediatría|Dra. Aleida Torres S."
  },
  {
    id: 18,
    start: "2024-11-05T16:00:00",
    end: "2024-11-05T16:35:00",
    text: "0111461-DCT|Cardiología|Dr. Juan Pérez"
  },
  {
    id: 19,
    start: "2024-11-09T17:15:00",
    end: "2024-11-09T17:50:00",
    text: "0111462-DCT|Dermatología|Dra. Rosa López"
  },
  {
    id: 20,
    start: "2024-11-15T18:30:00",
    end: "2024-11-15T19:05:00",
    text: "0111463-DCT|Neurología|Dr. Carlos Martínez"
  }

  ]
}
