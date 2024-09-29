import { Component, Input, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IBusquedaPacientes } from '../../interfaces/busqueda/busqueda-pacientes.interface';

@Component({
   selector: 'app-paginador',
   templateUrl: './paginador.component.html'
})
export class PaginadorComponent implements OnInit {
  //TODO: Ver forma de hacer esto para interfaz IBusquedaPacientes
   @Input() contentArray!: IBusquedaPacientes[];
   ltBus! : IBusquedaPacientes[];
   returnedArray!: IBusquedaPacientes[];
   showBoundaryLinks: boolean = true;
   showDirectionLinks: boolean = true;
   constructor(private localeService: BsLocaleService) {this.localeService.use('es');}

   pageChanged(event: PageChangedEvent): void {
      const startItem = (event.page - 1) * event.itemsPerPage;
      const endItem = event.page * event.itemsPerPage;
      this.returnedArray = this.contentArray.slice(startItem, endItem);
   }
   ngOnInit(): void {
      this.contentArray = this.contentArray.map((v: IBusquedaPacientes, i: number) => {
         return {
          curp: v.curp,
          nombres: v.nombres,
          edad: v.edad,
          apMaterno:v.apMaterno,
          apPaterno:v.apPaterno,
          especialidad:v.especialidad,
          sexo:v.sexo,
          domicilio:v.domicilio,
          localidad:v.localidad,
          folio:v.folio,
          fechaNacimiento:v.fechaNacimiento,
          idPaciente:v.idPaciente,
          telefono:v.telefono,
          fechaUltimoExMedico:v.fechaUltimoExMedico,
          medicoTratante:v.medicoTratante,
          motivoConsultaOdonto:v.motivoConsultaOdonto,
          ultimaVisita:v.ultimaVisita
         };
      });
      this.returnedArray = this.contentArray.slice(0, 5);
   }
}
