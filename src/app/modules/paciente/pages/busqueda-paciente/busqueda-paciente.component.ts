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

};

function validaSitio():boolean{
  let estado:boolean ;
  estado=false; //false quiere decir que esta en construccion
  return true;
}
