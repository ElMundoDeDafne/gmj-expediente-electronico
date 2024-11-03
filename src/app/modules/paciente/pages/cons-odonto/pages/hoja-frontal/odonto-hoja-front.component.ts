import { Component, ElementRef, Input, OnInit, ViewChild, forwardRef } from "@angular/core";
import { IBusquedaPacientes } from "../../../../interfaces/busqueda/busqueda-pacientes.interface";
import { IInfoPaciente } from "../../../../interfaces/paciente.interface";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { BusquedaPacienteComponent } from "../../../busqueda-paciente/busqueda-paciente.component";
import { Utilerias } from "../../../../../../utils/utilerias";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IConsultaEstomatologia } from "../../../../interfaces/cons-estomatologia.interface";

@Component({
  selector: 'app-odonto-hoja-front',
  templateUrl: 'odonto-hoja-front.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => this),
    multi: true
  }]
})

export class OdontoHojaFrontComponent implements OnInit,ControlValueAccessor{

  constructor(private modalService : BsModalService){
    this.utils = new Utilerias();
  }

  hojaFrontalEsto! : IConsultaEstomatologia;

/**
 *
writeValue(obj: IAntecedentesGinecoObstetricos): void {
  this.antecedentesGinecobstetricos = obj;
}

registerOnChange(fn: any): void {
  this.onChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouched = fn;
}

setDisabledState?(isDisabled: boolean): void {
  // Implement if needed
}
 */
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: IConsultaEstomatologia): void {
    this.hojaFrontalEsto = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }
  ngOnInit(): void {}

  utils : Utilerias;
  form : IInfoPaciente = {};
  modalRef?:BsModalRef;
  nombres:string = '';
  telefono:string = '';
  localidad:string = '';
  fechaUltimoExMedico:string = '';
  bsValue : Date = new Date();

  formatearFecha(fecha : string) : void {
       // Crear un objeto Date a partir de la cadena ISO
       const date = new Date(fecha);

       // Obtener el día, mes y año
       const day = String(date.getDate()).padStart(2, '0');
       const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
       const year = date.getFullYear();

       // Retornar el formato DD/MM/YYYY
       //return `${day}/${month}/${year}`;
  }

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
        const [nombreUno,nombreDos] = result.nombres.split(' ');
        this.form.nombrePropio1 = this.nombres.toUpperCase();
        this.form.fechaNacimiento = result.fechaNacimiento;
        this.form.motivoConsulta = result.motivoConsultaOdonto.toUpperCase();
        this.telefono = result.telefono;
        this.localidad = result.localidad.toUpperCase();
        this.form.fechaUltimoExMedico = result.fechaUltimoExMedico;
        this.hojaFrontalEsto.hojaFrontalOdonto.nombreUno = nombreUno.toUpperCase();
        this.hojaFrontalEsto.hojaFrontalOdonto.nombreDos = nombreDos.toUpperCase();
        this.hojaFrontalEsto.hojaFrontalOdonto.motivoConsulta = result.motivoConsultaOdonto.toUpperCase();
        this.hojaFrontalEsto.hojaFrontalOdonto.edad = result.edad;
        this.hojaFrontalEsto.hojaFrontalOdonto.sexo = result.sexo;


        // // this.desactivarDivs();
      }
    );
    //Cuando se cierra el modal
    // (this.modalRef.content as ModalContentComponent).
    // this.desactivarDivs();
  }
}
