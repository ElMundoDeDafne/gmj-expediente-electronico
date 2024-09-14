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

  loadData():void{
    this.resultadosBusquedaServ.getData()
    .subscribe((response)=> {
      this.data = response;
      this.filteredData = this.data;
    });
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

  public resultados = [
    {
      idPaciente:1234,
      nombres:'Christian Yamil',
      apPaterno:'Castillo',
      apMaterno:'Covarrubias',
      edad:32,
      especialidad:'Neurologia',
      medicoTratante:'Gerardo Borbolla',
      ultimaVisita:'09/03/2024'
    },
    {
      idPaciente:1235,
      nombres:'Dafne',
      apPaterno:'Castillo',
      apMaterno:'Torres',
      edad:6,
      especialidad:'Neurologia',
      medicoTratante:'Gerardo Borbolla',
      ultimaVisita:'09/03/2024'
    },
    {
      idPaciente:1236,
      nombres:'Aleida',
      apPaterno:'Torres',
      apMaterno:'Sanchez',
      edad:32,
      especialidad:'Familiar',
      medicoTratante:'Gerardo Borbolla',
      ultimaVisita:'09/03/2024'
    },
    {
      idPaciente:1237,
      nombres:'Christian Yamil',
      apPaterno:'Castillo',
      apMaterno:'Covarrubias',
      edad:32,
      especialidad:'Neurologia',
      medicoTratante:'Gerardo Borbolla',
      ultimaVisita:'09/03/2024'
    },
    {
      idPaciente:1238,
      nombres:'Christian Yamil',
      apPaterno:'Castillo',
      apMaterno:'Covarrubias',
      edad:32,
      especialidad:'Neurologia',
      medicoTratante:'Gerardo Borbolla',
      ultimaVisita:'09/03/2024'
    }
  ];

};

let resultados: Object[]= [];

function validaSitio():boolean{
  let estado:boolean ;
  estado=false; //false quiere decir que esta en construccion
  return true;
}
