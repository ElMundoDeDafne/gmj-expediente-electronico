  import { IBusquedaPaciente } from './../../interfaces/busqueda-paciente.interface';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ResultadosBusquedaService } from '../../service/resultados-busqueda.service';
import { IBusquedaPacientes } from '../../interfaces/busqueda/busqueda-pacientes.interface';
import { setDefaultResultOrder } from 'dns';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { debug } from 'console';

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrl: './busqueda-paciente.component.css'
})

export class BusquedaPacienteComponent implements OnInit, AfterViewInit{

constructor(private resultadosBusquedaServ : ResultadosBusquedaService, private bsModalRefdf : BsModalRef){ }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if(this.folioRB){
        this.folioRB.nativeElement.checked = true;
        this.option = this.folioRB.nativeElement.value;
      }
    },0);

    this.loadData();
  }
  @ViewChild('folioRadioButton',{static:false}) folioRB! : ElementRef<HTMLInputElement> ;
  @Input() isConfirmed! : boolean;
  @Output() onCloseEmitter : EventEmitter<IBusquedaPacientes> = new EventEmitter(); //EventEmitter para comunicarse con componente padre
  data : IBusquedaPacientes[] = [];
  filteredData : IBusquedaPacientes[] = [];
  searchTerm : string = ''; //termino de busqueda
  option : string = ''; //opcion para busqueda
  seleccion! : IBusquedaPacientes ; //opcion seleccionada
  sinResultados:boolean=false;
  selectedPatientId: number | null = null;
  returnedArray!: IBusquedaPacientes[];
  contentArray: IBusquedaPacientes[] = [];

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

onRadioChange(resultado: IBusquedaPacientes): void {
  this.seleccion = resultado;

}
/*** criteria: texto a buscar
 * option : [folio,curp,localidad,especialidad]
 */
filterDataByCriteria(option:string,criteria:string):void{
  (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = '';
  if(option === '') {
    (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = 'Seleccione una opcion';
    return;
  } else {
    if(criteria===''){
      this.filteredData = this.data;
       this.returnedArray = this.filteredData.slice(0,5);
    } else {
      const searchTermLower = criteria.toLowerCase().trim();
      if(option === 'folio') {
        var r! : string;
        this.returnedArray = this.data.filter((item) => {
          return item.folio.toLowerCase().includes(searchTermLower);
        });
        this.filteredData = this.returnedArray;
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
    if (this.filteredData.length===0) (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = `No se encontraron resultados con '${criteria}' para opcion seleccionada ${option} !!`;
  }
}

  public busqueda:IBusquedaPaciente={
    textoCriterioBusqueda:'',
    criterioBusqueda:''
  }
};
