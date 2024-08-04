import { IBusquedaPaciente } from './../../interfaces/busqueda-paciente.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrl: './busqueda-paciente.component.css'
})

export class BusquedaPacienteComponent implements OnInit{

  ngOnInit(): void {
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
