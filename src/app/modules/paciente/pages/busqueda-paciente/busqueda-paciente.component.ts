  import { IBusquedaPaciente } from './../../interfaces/busqueda-paciente.interface';
import { Component, OnInit } from '@angular/core';
import { ResultadosBusquedaService } from '../../service/resultados-busqueda.service';
import { IBusquedaPacientes } from '../../interfaces/busqueda/busqueda-pacientes.interface';

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrl: './busqueda-paciente.component.css'
})

export class BusquedaPacienteComponent implements OnInit{

constructor(private resultadosBusquedaServ : ResultadosBusquedaService){ }

  ngOnInit(): void {
    this.loadData();
  }

  data : IBusquedaPacientes[] = [];
  filteredData : IBusquedaPacientes[] = [];
  searchTerm : string = ''; //termino de busqueda
  option : string = ''; //opcion para busqueda

  loadData():void{
    this.resultadosBusquedaServ.getData()
    .subscribe((response)=> {
      this.data = response;
      this.filteredData = this.data;
    });
  }

  selectedPatientId: number | null = null;

onRadioChange(resultado: any): void {
  this.selectedPatientId = resultado.idPaciente;
}
/*** criteria: texto a buscar
 * option : [folio,curp,localidad,especialidad]
 */
filterDataByCriteria(option:string,criteria:string):void{
  if(option === '') {
    (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = 'Seleccione una opcion';
    return;
  } else {
    (<HTMLBodyElement> document.getElementById('mensajeError')).innerHTML = '';
    this.filteredData = this.data.filter(
      item => {
        const searchTermLower = criteria.toLowerCase();
        if(option === 'folio') {
          return item.folio.toLowerCase().includes(searchTermLower);
        } else if (option === 'curp') {
          return item.curp.toLowerCase().includes(searchTermLower);
        } else if (option === 'localidad') {
          return item.localidad.toLowerCase().includes(searchTermLower);
        } else if (option === 'especialidad') {
          return item.especialidad.toLowerCase().includes(searchTermLower);
        } else if (option === 'nombres'){
          return item.nombres.toLowerCase().includes(searchTermLower);
        } else if (option === 'medicotratante'){
          return item.medicoTratante.toLowerCase().includes(searchTermLower);
        } else {
          return item.especialidad.toLowerCase().includes(searchTermLower);
        }
      });
  }
}

  filterData():void {
    this.filteredData = this.data.filter(item => {
      const searchTermLower = this.searchTerm.toLowerCase();
      return item.nombres.toLowerCase().includes(searchTermLower) ||
            item.especialidad.toLowerCase().includes(searchTermLower);
    });
  }

  public busqueda:IBusquedaPaciente={
    textoCriterioBusqueda:'',
    criterioBusqueda:''
  }
};


function validaSitio():boolean{
  let estado:boolean ;
  estado=false; //false quiere decir que esta en construccion
  return true;
}
