import { BusquedaPacienteRequestDTO } from './../../interfaces/request/busq-pacientes-request.interface';
import { BusquedaPacientesResponseDTO } from './../../interfaces/response/busq-pacientes-response.interface';
  import { BusquedaPacienteDTO } from './../../interfaces/busqueda-paciente.interface';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ResultadosBusquedaService } from '../../service/resultados-busqueda.service';
import { IBusquedaPacientes } from '../../interfaces/busqueda/busqueda-pacientes.interface';
import { setDefaultResultOrder } from 'dns';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { debug } from 'console';
import { Utilerias } from '../../../../utils/utilerias';
import { BusquedaPacienteService } from '../../../../services/busq-pacientes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertGeneratorService } from '../../../../pages/alerts/alert-generator/alert-generator.service';

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrl: './busqueda-paciente.component.css'
})

export class BusquedaPacienteComponent implements OnInit, AfterViewInit{

constructor(private bsModalRefdf : BsModalRef, private busquedaPacienteService : BusquedaPacienteService, private alertas:AlertGeneratorService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if(this.folioRB){
        this.folioRB.nativeElement.checked = true;
        this.option = this.folioRB.nativeElement.value;
      }
    },0);

    // this.loadData();
    this.utils = new Utilerias();
  }
  @ViewChild('folioRadioButton',{static:false}) folioRB! : ElementRef<HTMLInputElement> ;
  @Input() isConfirmed! : boolean;
  @Output() onCloseEmitter : EventEmitter<BusquedaPacientesResponseDTO> = new EventEmitter(); //EventEmitter para comunicarse con componente padre
  data : IBusquedaPacientes[] = [];
  dataMs : BusquedaPacientesResponseDTO = {
    exito : false
  };
  //iBusqPacResponse
  filteredData : IBusquedaPacientes[] = [];
  searchTerm : string = ''; //termino de busqueda
  headers : string[] = ['','Folio','Nombre(s)','Ap. Paterno','Ap. Materno','CURP','Localidad','Edad','Especialidad','Medico Tratante','Ultima Visita','Receta'];
  radios : string[] = ['Folio','Nombre','Localidad','CURP','Medico tratante','Especialidad'];
  resultadosBusqueda : BusquedaPacientesResponseDTO[] = [];
  option : string = ''; //opcion para busqueda
  seleccion! : BusquedaPacientesResponseDTO ; //opcion seleccionada
  sinResultados:boolean=false;
  selectedPatientId: number | null = null;
  returnedArray!: IBusquedaPacientes[];
  contentArray: IBusquedaPacientes[] = [];
  utils! : Utilerias;

  ngOnInit(): void {
    //this.contentArray = this.data;
    // this.contentArray = this.contentArray.map((v: IBusquedaPacientes, i: number) => {
    //    return v;
    // });
    // this.returnedArray = this.contentArray.slice(0, 5);

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.filteredData.slice(startItem, endItem);
 }

  borrarSearchTerm():void{
    this.searchTerm = "";
  }

  sendMessageParent() : void {
    this.bsModalRefdf.hide();
    if(this.seleccion != null) {
      this.onCloseEmitter.emit(this.seleccion);
    } else {
      (<HTMLBodyElement> document.getElementById('mensajeErrorAgregar')).innerHTML = 'No se ha seleccionado algun registro';
      return;
    }
  }

  loadData():void{
    // this.resultadosBusquedaServ.getData();
    //this.contentArray = this.data;
    //this.contentArray = this.filteredData;
  //   this.contentArray = this.contentArray.map((v: IBusquedaPacientes, i: number) => {
  //     return v;
  //  });
  //  this.returnedArray = this.filteredData.slice(0, 5);
  }

onRadioChange(resultado: BusquedaPacientesResponseDTO): void {
  this.seleccion = resultado;

}



msBusqPacientes(searchTermLower: string, option: string) : void{
  console.error(searchTermLower);
  console.error(option);
  var iBusqPacResponse : BusquedaPacientesResponseDTO;
  var request : BusquedaPacienteRequestDTO = {};
  var msg : string;
  console.error(`Opcion: ${option}`);

    request = {
      tipoBusqueda : option,
      especialidad: searchTermLower
    }

  if(option==='todos') {
      window.alert('Buscar todos los registros');
      if(this.alertas.confirmarOperacionSinDestino('','¿Desea cargar todos los registros?')){
      console.error('Se consume servicio de busqueda de pacientes');
  //se consume servicio buscando por folio
      this.busquedaPacienteService.getBusqueda(request).subscribe(
    data => {
      this.resultadosBusqueda = data;
      console.error('Respuesta registro paciente: ',data);
      //iterar data
      var i : number= 0;
      console.error(`Total de registros encontrados: ${data.length}`);
    //  console.error(`Res. Busq: -> ${this.resultadosBusqueda.length}`);
    }
    ,
     error => {
       var resp : string = this.utils.manejarErrorServicios(error);
       console.error(`Respuesta del servicio: ${error}`);
       msg = this.utils.manejarErrorServicios(error);
       this.alertas.ventanaError(msg);
    }
);
      }
  } else {
  console.error('Se consume servicio de busqueda de pacientes');
  //se consume servicio buscando por folio
  this.busquedaPacienteService.getBusqueda(request).subscribe(
    data => {
      this.resultadosBusqueda = data;
      console.error('Respuesta registro paciente: ',data);
      //iterar data
      var i : number= 0;
      console.error(`Total de registros encontrados: ${data.length}`);
    //  console.error(`Res. Busq: -> ${this.resultadosBusqueda.length}`);
    }
    ,
     error => {
       var resp : string = this.utils.manejarErrorServicios(error);
       console.error(`Respuesta del servicio: ${error}`);
       msg = this.utils.manejarErrorServicios(error);
       this.alertas.ventanaError(msg);
    }
);
  }
}



/*** criteria: texto a buscar
 * option : [folio,curp,localidad,especialidad]
 */
filterDataByCriteria(option:string,criteria:string):void{
  console.error('Se inicia busqueda de pacientes');
  (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = '';
      this.filteredData = this.data;
      this.returnedArray = this.filteredData.slice(0,5);
  if(option === '') {
    (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = 'Seleccione una opcion';
    return;
  } else {
    if(criteria.trim()==='') {
      (<HTMLInputElement> document.getElementById('criterioBusquedaTexto')).innerHTML = '';
      option='todos'; //cargamos todos los pacientes
      this.msBusqPacientes(criteria,option);
      this.filteredData = this.data;
      this.returnedArray = this.filteredData.slice(0,5);
    } else {
      const searchTermLower = criteria.toUpperCase().trim();
      this.msBusqPacientes(searchTermLower,option);
    }
    // if (this.filteredData.length===0) (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = `No se encontraron resultados con criterio '<b>${criteria}</b>' para opcion seleccionada <b>${option}</b>`;
  }

}

  public busqueda:BusquedaPacienteDTO={
    textoCriterioBusqueda:'',
    criterioBusqueda:''
  }
};


