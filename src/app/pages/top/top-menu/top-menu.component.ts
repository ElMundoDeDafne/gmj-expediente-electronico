import { Component } from '@angular/core';
import { ConstantesGenerales } from '../../../utils/constantes-generales';
import { Menu } from './top-menu-menus.interface';
import { AlertGeneratorService } from '../../alerts/alert-generator/alert-generator.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
constructor(private alertas:AlertGeneratorService){}

  cargarAlertaSalir(){
    this.alertas.confirmarOperacion("¿Desea salir?","Está a punto de cerrar sesión.","login");
  }

  nombreApp : string = ConstantesGenerales.NOMBRE_APP;
  public listaMenus:Menu[]=[
    {
      nombreMenu:'Nueva Consulta',
      path:'',
      clase:'nav-link dropdown-toggle'
    },{
      nombreMenu:'Paciente',
      path:'',
      nombreSubmenu:['Buscar paciente','b'],
      submenuPaths:['consulta/pacientes/buscar','c'],
      clase:'nav-link dropdown-toggle',
      submenuClase:['dropdown-item']
    }
  ];
}
