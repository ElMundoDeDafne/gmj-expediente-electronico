import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { IBusquedaPacientes } from "../../../../interfaces/busqueda/busqueda-pacientes.interface";
import { IInfoPaciente } from "../../../../interfaces/paciente.interface";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { BusquedaPacienteComponent } from "../../../busqueda-paciente/busqueda-paciente.component";

@Component({
  selector: 'app-odonto-hoja-front',
  templateUrl: 'odonto-hoja-front.component.html',
})

export class OdontoHojaFrontComponent implements OnInit{

  constructor(private modalService : BsModalService){}
  ngOnInit(): void {}

  form : IInfoPaciente = {};

  modalRef?:BsModalRef;
  nombres:string = '';
  telefono:string = '';
  localidad:string = '';
  fechaUltimoExMedico:string = '';

  desactivarDivs():void {
    const totalElementos = (<HTMLCollectionOf<HTMLInputElement>> document.getElementsByClassName('infoPacienteId'));
    //recorremos los elementos
    for(let i = 0 ; i < totalElementos.length ; i++) {
      totalElementos[i].disabled=true;
    }
  };

  cargarModal():void {
    // alert('llamando a modal');
    this.modalRef = this.modalService.show(BusquedaPacienteComponent,{initialState:{isConfirmed:true},class: 'modal-xl '});

    (this.modalRef.content as BusquedaPacienteComponent).onCloseEmitter.subscribe(
      (result:IBusquedaPacientes) => {
        this.form.edad = result.edad;
        this.form.sexoAlNacer = result.sexo.toUpperCase();
        this.form.apellidoPaterno = result.apPaterno.toUpperCase();
        this.form.apellidoMaterno = result.apMaterno.toUpperCase();
        this.nombres=result.nombres.split(' ')[0]+' '+(result.nombres.split(' ')[1]===null || result.nombres.split(' ')[1]===undefined?'':result.nombres.split(' ')[1]);
        this.form.nombrePropio1 = this.nombres.toUpperCase();
        this.form.fechaNacimiento = result.fechaNacimiento;
        this.form.motivoConsulta = result.motivoConsultaOdonto.toUpperCase();
        this.telefono = result.telefono;
        this.localidad = result.localidad.toUpperCase();
        this.form.fechaUltimoExMedico = result.fechaUltimoExMedico;
        // // this.desactivarDivs();
      }
    );
    //Cuando se cierra el modal
    // (this.modalRef.content as ModalContentComponent).
    // this.desactivarDivs();
  }
}
