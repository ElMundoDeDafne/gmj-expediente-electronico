import { Component } from '@angular/core';
import { ConstantesGenerales } from '../../../utils/constantes-generales';
import { Menu } from './top-menu-menus.interface';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
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
