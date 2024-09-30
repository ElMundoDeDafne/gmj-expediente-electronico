  import { IBusquedaPaciente } from './../../interfaces/busqueda-paciente.interface';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ResultadosBusquedaService } from '../../service/resultados-busqueda.service';
import { IBusquedaPacientes } from '../../interfaces/busqueda/busqueda-pacientes.interface';
import { setDefaultResultOrder } from 'dns';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
  @ViewChild('folioRadioButton',{static:false})
  folioRB! : ElementRef<HTMLInputElement> ;
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
  contentArray!: IBusquedaPacientes[];

  ngOnInit(): void {
    this.filteredData = this.filteredData.map((v: IBusquedaPacientes, i: number) => {
      return v;
   });
   this.filteredData = this.filteredData.slice(0, 5);

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.filteredData = this.data.slice(startItem, endItem);
 }

  borrarSearchTerm():void{
    this.searchTerm = "";
  }

  sendMessageParent() : void {
    this.bsModalRefdf.hide();
    if(this.seleccion != null) {
      this.onCloseEmitter.emit(this.seleccion);
    }
  }

  loadData():void{
    this.resultadosBusquedaServ.getData()
    .subscribe((response)=> {
      this.data = response;
      this.filteredData = this.data;
    });
  }

onRadioChange(resultado: IBusquedaPacientes): void {
  this.seleccion = resultado;

}
/*** criteria: texto a buscar
 * option : [folio,curp,localidad,especialidad]
 */
filterDataByCriteria(option:string,criteria:string):void{
  if(option === '') {
    (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = 'Seleccione una opcion';
    return;
  } else {
    if(criteria===''){
      this.filteredData = this.data;
      this.sinResultados = false;
    } else {
      (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = '';
      const searchTermLower = criteria.toLowerCase().trim();

      if(option === 'folio') {
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.folio.toLowerCase().includes(searchTermLower);
        });
      } else if(option === 'curp'){
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.curp.toLowerCase().includes(searchTermLower);
        });
      } else if (option === 'localidad') {
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.localidad.toLowerCase().includes(searchTermLower);
        });
      } else if (option === 'especialidad') {
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.especialidad.toLowerCase().includes(searchTermLower);
        });
      } else if (option === 'nombres'){
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.nombres.toLowerCase().includes(searchTermLower);
        });
      } else if (option === 'medicotratante'){
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.medicoTratante.toLowerCase().includes(searchTermLower);
        });
      } else {
        this.filteredData = this.data.filter((item) => {
          this.sinResultados = this.filteredData.length===0;
          return item.especialidad.toLowerCase().includes(searchTermLower);
        });
      }
    }
  }
}

  public busqueda:IBusquedaPaciente={
    textoCriterioBusqueda:'',
    criterioBusqueda:''
  }
};
