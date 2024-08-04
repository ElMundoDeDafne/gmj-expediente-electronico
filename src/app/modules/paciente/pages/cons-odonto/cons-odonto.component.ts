import { Component, ViewEncapsulation } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { IConsultaEstomatologia } from "../../interfaces/cons-estomatologia.interface";

@Component({
  selector: 'app-consulta-odonto',
  templateUrl: './cons-odonto.component.html',
  styleUrl: './cons-odonto.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class ConsultaOdontologicaComponent {
  public consultaOdonto:IConsultaEstomatologia={

  }
}
