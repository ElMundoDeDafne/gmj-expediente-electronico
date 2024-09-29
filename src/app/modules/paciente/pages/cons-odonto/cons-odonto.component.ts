import { AfterViewInit, Component, ElementRef, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { createPopper } from '@popperjs/core';

import { IConsultaEstomatologia } from "../../interfaces/cons-estomatologia.interface";
import { IPaciente } from "../../interfaces/paciente.interface";

import {BsModalRef, BsModalService, ModalContainerComponent, ModalOptions} from 'ngx-bootstrap/modal';
import { title } from "process";
import { BusquedaPacienteComponent } from "../busqueda-paciente/busqueda-paciente.component";
import { EventEmitter } from "stream";
import { IBusquedaPacientes } from "../../interfaces/busqueda/busqueda-pacientes.interface";

@Component({
  selector: 'app-consulta-odonto',
  templateUrl: './cons-odonto.component.html',
  styleUrl: './cons-odonto.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class ConsultaOdontologicaComponent implements AfterViewInit {

  @ViewChild('buttonRef')
  buttonElement!:ElementRef;

  @ViewChild('tooltipRef')
  toolTipElement!:ElementRef;

  @ViewChild('modalRef')
  modalElement!: ElementRef;

  @ViewChild('triggerRef')
  triggerElement!: ElementRef;

  resultado! : IBusquedaPacientes;

  mensaje! : IBusquedaPacientes;

  isModalVisible: boolean = false;  // Controla la visibilidad del modal
  modalRef?:BsModalRef;




  constructor(private modalService : BsModalService){

  }

  ngAfterViewInit(): void {
    // //tooltip
    // createPopper(this.buttonElement.nativeElement,
    //   this.toolTipElement.nativeElement,
    //   {placement:'top'}
    // );

    //     // Configura Popper.js para centrar el modal
    //     createPopper(this.triggerElement.nativeElement, this.modalElement.nativeElement, {
    //       placement: 'auto',  // Esto colocará el modal en el centro
    //       modifiers: [
    //         {
    //           name: 'offset',
    //           options: {
    //             offset: [0, 50], // Ajustar el desplazamiento desde el botón
    //           },
    //         },
    //         {
    //           name: 'preventOverflow',
    //           options: {
    //             boundary: 'viewport', // Prevenir que el modal se salga de la pantalla
    //           },
    //         },
    //       ],
    //     });
  }

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }


  cargarModal():void{
    // alert('llamando a modal');
    // this.modalRef = this.modalService.show(BusquedaPacienteComponent,{initialState:{isConfirmed:true},class: 'modal-xl '});
    // // this.modalRef.content.closeBtnName='d';
    // (this.modalRef.content as BusquedaPacienteComponent).onCloseEmitter.subscribe(
    //   (result:IBusquedaPacientes) => {
    //     this.resultado = result;
    //     tis.mensaje = result;
      // }
    // );
    //Cuando se cierra el modal
    // (this.modalRef.content as ModalContentComponent).
  }

  x : IPaciente | null = null;

  public consultaOdonto:IConsultaEstomatologia={

  }
}
