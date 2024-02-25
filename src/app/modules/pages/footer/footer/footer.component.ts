import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  nombreApp:string='Grupo Medico Jacala App';
  versionApp:string = '0.0.1 demo';
  copyrightText:string='(C) 2024 Mundo de Dafne. Todos los derechos reservados.';
}
