import { Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

/**
 *
 * Clase de utilería para generar alertas SweetAlert, NgX Bootstrap
 */
@Injectable({providedIn:'root'})
export class AlertGeneratorService implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {

  }

  //ventana animacion exito
  /** Ventana que muestra una animacion con un check verde [exito]*/
  ventanaExitoSinBoton():void{
    Swal.fire({
      // title:"Alerta!",
      html:'<h2>Operacion exitosa</h2>',
      icon:'success',
      showConfirmButton:false,
      timer:3000,
      timerProgressBar:true
      // confirmButtonText:'OK',
      // cancelButtonText:'Cancelar'
    });
  }


  /**ALERTA DE CONFIRMACION(S/N) */
  confirmarOperacion(titulo:string,mensaje:string,destino:string):void{
    Swal.fire(
      {
        icon:'warning',
        title:titulo,
        text:mensaje,
        showCancelButton:true,
        cancelButtonText:'No',
        confirmButtonText:'Si'
      }
    ).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate([destino]);
      }
      return;
    });
  }

  ventanaInformacion(mensaje:string):void{
    Swal.fire({
      icon:'info',
      title:'Información',
      text:mensaje,
      showConfirmButton:true
    });
  }
}
