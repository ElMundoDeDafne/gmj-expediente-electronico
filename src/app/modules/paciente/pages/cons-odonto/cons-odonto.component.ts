import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { createPopper } from '@popperjs/core';

import { IConsultaEstomatologia } from "../../interfaces/cons-estomatologia.interface";
import { IPaciente } from "../../interfaces/paciente.interface";

@Component({
  selector: 'app-consulta-odonto',
  templateUrl: './cons-odonto.component.html',
  styleUrl: './cons-odonto.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class ConsultaOdontologicaComponent implements AfterViewInit {

  @ViewChild('buttonRef') buttonElement!:ElementRef;
  @ViewChild('tooltipRef') toolTipElement!:ElementRef;

  @ViewChild('modalRef') modalElement!: ElementRef;
  @ViewChild('triggerRef') triggerElement!: ElementRef;
  isModalVisible: boolean = false;  // Controla la visibilidad del modal


  ngAfterViewInit(): void {
    //tooltip
    createPopper(this.buttonElement.nativeElement,
      this.toolTipElement.nativeElement,
      {placement:'top'}
    );

        // Configura Popper.js para centrar el modal
        createPopper(this.triggerElement.nativeElement, this.modalElement.nativeElement, {
          placement: 'auto',  // Esto colocará el modal en el centro
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 50], // Ajustar el desplazamiento desde el botón
              },
            },
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport', // Prevenir que el modal se salga de la pantalla
              },
            },
          ],
        });
  }

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }


  x : IPaciente | null = null;

  public consultaOdonto:IConsultaEstomatologia={

  }
}
