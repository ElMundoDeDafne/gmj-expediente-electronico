import { Component, ViewEncapsulation } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
    selector: 'app-odonto-observaciones',
    templateUrl: './odonto-observaciones.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [provideNativeDateAdapter()],
  })
  export class ConsultaOdontologicaObservacionesComponent {

  }
