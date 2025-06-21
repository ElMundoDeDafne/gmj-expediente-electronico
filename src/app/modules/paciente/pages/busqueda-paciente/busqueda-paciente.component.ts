import { IBusqPacientesRequest } from './../../interfaces/request/busq-pacientes-request.interface';
import { IBusqPacientesResponse } from './../../interfaces/response/busq-pacientes-response.interface';
  import { IBusquedaPaciente } from './../../interfaces/busqueda-paciente.interface';
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

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrl: './busqueda-paciente.component.css'
})

export class BusquedaPacienteComponent implements OnInit, AfterViewInit{

constructor(private resultadosBusquedaServ : ResultadosBusquedaService, private bsModalRefdf : BsModalRef, private busquedaPacienteService : BusquedaPacienteService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if(this.folioRB){
        this.folioRB.nativeElement.checked = true;
        this.option = this.folioRB.nativeElement.value;
      }
    },0);

    this.loadData();
    this.utils = new Utilerias();
  }
  @ViewChild('folioRadioButton',{static:false}) folioRB! : ElementRef<HTMLInputElement> ;
  @Input() isConfirmed! : boolean;
  @Output() onCloseEmitter : EventEmitter<IBusqPacientesResponse> = new EventEmitter(); //EventEmitter para comunicarse con componente padre
  data : IBusquedaPacientes[] = [];
  dataMs : IBusqPacientesResponse = {
    exito : false
  };
  //iBusqPacResponse
  filteredData : IBusquedaPacientes[] = [];
  searchTerm : string = ''; //termino de busqueda
  headers : string[] = ['','Folio','Nombre(s)','Ap. Paterno','Ap. Materno','CURP','Localidad','Edad','Especialidad','Medico Tratante','Ultima Visita','Receta'];
  radios : string[] = ['Folio','Nombre','Localidad','CURP','Medico tratante','Especialidad'];
  resultadosBusqueda : IBusqPacientesResponse[] = [];
  option : string = ''; //opcion para busqueda
  seleccion! : IBusqPacientesResponse ; //opcion seleccionada
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
    this.resultadosBusquedaServ.getData()
    .subscribe((response)=> {
      this.data = response;
      this.filteredData = this.data;
      // this.filteredData = this.filteredData.slice(0,5);
      this.returnedArray = this.filteredData.slice(0, 5);
      // this.returnedArray = this.filteredData.slice(0, 5);
    });
    //this.contentArray = this.data;
    //this.contentArray = this.filteredData;
  //   this.contentArray = this.contentArray.map((v: IBusquedaPacientes, i: number) => {
  //     return v;
  //  });
  //  this.returnedArray = this.filteredData.slice(0, 5);
  }

onRadioChange(resultado: IBusqPacientesResponse): void {
  this.seleccion = resultado;

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
    if(criteria.trim()===''){
      (<HTMLInputElement> document.getElementById('criterioBusquedaTexto')).innerHTML = '';
      this.filteredData = this.data;
      this.returnedArray = this.filteredData.slice(0,5);
    } else {
      const searchTermLower = criteria.toLowerCase().trim();

    var pruebas : boolean = false;
      if(option === 'folio') {
        console.error('Buscando por folio');
        if(!pruebas) {
          var iBusqPacResponse : IBusqPacientesResponse;
          var iBusqPacRequest : IBusqPacientesRequest;
          iBusqPacRequest = {
            folio: 'sdsd',
            nombre: 'sdfdsf'
          }
          iBusqPacResponse = {
            exito:false
          }
          console.error('Se consume servicio de busqueda de pacientes');
          this.busquedaPacienteService.getDataPost(iBusqPacRequest).subscribe(
            data => {
              this.resultadosBusqueda = data;
              console.error('Respuesta registro paciente: ',data);

              //iterar data
              var i : number= 0;
              console.error(`Total de registros encontrados: ${data.length}`);
              data.forEach((item: IBusqPacientesResponse) => {
                i++;
                console.error('Iterando data: ',item);
            });
             console.error(`Res. Busq: -> ${this.resultadosBusqueda.length}`);
            },
            error => {
              var resp : string = this.utils.manejarErrorServicios(error);
              console.error(`Respuesta del servicio: ${resp}`);
        //this.msg = this.utils.manejarErrorServicios(error);
        //this.alertas.ventanaError(this.msg);
            }
        );
      }
        /*
      else {
          var r! : string;
          this.returnedArray = this.data.filter((item) => {
            return item.folio.toLowerCase().includes(searchTermLower);
          });
          this.filteredData = this.returnedArray;
        }
          */
      } else if(option === 'curp'){
        this.returnedArray = this.data.filter((item) => {
          return item.curp.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      } else if (option === 'localidad') {
        this.returnedArray = this.data.filter((item) => {
          return item.localidad.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      } else if (option === 'especialidad') {
        this.returnedArray = this.data.filter((item) => {
          return item.especialidad.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      } else if (option === 'nombres'){
        this.returnedArray = this.data.filter((item) => {
          return item.nombres.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      } else if (option === 'medicotratante'){
        this.returnedArray = this.data.filter((item) => {
          return item.medicoTratante.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      } else {
        this.returnedArray = this.data.filter((item) => {
          return item.especialidad.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
      }
    }
    if (this.filteredData.length===0) (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = `No se encontraron resultados con criterio '<b>${criteria}</b>' para opcion seleccionada <b>${option}</b>`;
  }
}

  public busqueda:IBusquedaPaciente={
    textoCriterioBusqueda:'',
    criterioBusqueda:''
  }
};
