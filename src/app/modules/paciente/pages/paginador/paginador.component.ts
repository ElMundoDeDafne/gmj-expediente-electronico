import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
   selector: 'app-paginador',
   templateUrl: './paginador.component.html'
})
export class PaginadorComponent implements OnInit {
  //TODO: Ver forma de hacer esto para interfaz IBusquedaPacientes
   contentArray: string[] = new Array(50).fill('');
   returnedArray!: string[];
   showBoundaryLinks: boolean = true;
   showDirectionLinks: boolean = true;
   constructor(private localeService: BsLocaleService) {this.localeService.use('es');}

   pageChanged(event: PageChangedEvent): void {
      const startItem = (event.page - 1) * event.itemsPerPage;
      const endItem = event.page * event.itemsPerPage;
      this.returnedArray = this.contentArray.slice(startItem, endItem);
   }
   ngOnInit(): void {
      this.contentArray = this.contentArray.map((v: string, i: number) => {
         return 'Line '+ (i + 1);
      });
      this.returnedArray = this.contentArray.slice(0, 5);
   }
}
