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
  resultado! : IBusquedaPacientes;
  nombres:string='';
  telefono:string='';
  localidad:string='';

  desactivarDivs():void {
    const totalElementos = (<HTMLCollectionOf<HTMLInputElement>> document.getElementsByClassName('bloque'));
    alert('obtenemostotalelementos');
    (<HTMLInputElement> document.getElementById('edad')).disabled=true;
    //recorremos los elementos
    for(let i = 0 ; i < totalElementos.length ; i++) {
      totalElementos[i].disabled=true;
      alert(totalElementos[i].textContent);
    }
  };

  cargarModal():void{
    // alert('llamando a modal');
    this.modalRef = this.modalService.show(BusquedaPacienteComponent,{initialState:{isConfirmed:true},class: 'modal-xl '});
    // this.modalRef.content.closeBtnName='d';
    (this.modalRef.content as BusquedaPacienteComponent).onCloseEmitter.subscribe(
      (result:IBusquedaPacientes) => {
        this.resultado = result;
        this.form.edad = this.resultado.edad;
        this.form.sexoAlNacer = this.resultado.sexo.toUpperCase();
        this.form.apellidoPaterno = this.resultado.apPaterno.toUpperCase();
        this.form.apellidoMaterno = this.resultado.apMaterno.toUpperCase();
        this.nombres=this.resultado.nombres.split(' ')[0]+' '+(this.resultado.nombres.split(' ')[1]===null || this.resultado.nombres.split(' ')[1]===undefined?'':this.resultado.nombres.split(' ')[1]);
        this.form.nombrePropio1 = this.nombres.toUpperCase();
        this.form.fechaNacimiento = this.resultado.fechaNacimiento
        this.form.motivoConsulta = this.resultado.motivoConsultaOdonto.toUpperCase();
        this.telefono = this.resultado.telefono;
        this.localidad = this.resultado.localidad.toUpperCase();
        // // this.desactivarDivs();
      }
    );


    //Cuando se cierra el modal
    // (this.modalRef.content as ModalContentComponent).
  }

}
