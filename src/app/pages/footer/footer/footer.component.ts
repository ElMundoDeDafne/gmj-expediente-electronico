import { Component } from '@angular/core';
import { ConstantesGenerales } from '../../../utils/constantes-generales';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  nombreApp:string=ConstantesGenerales.NOMBRE_APP;
  versionApp:string = ConstantesGenerales.VERSION_APP;
  copyrightText:string='(C) 2024 Mundo de Dafne. Todos los derechos reservados.';
}
