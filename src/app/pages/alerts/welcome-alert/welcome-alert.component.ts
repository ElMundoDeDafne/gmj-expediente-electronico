import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-alert',
  templateUrl: './welcome-alert.component.html',
  styleUrl: './welcome-alert.component.css'
})
export class WelcomeAlertComponent implements OnInit{
  constructor(private router:Router){}

ngOnInit(): void {
  this.showAlert();
}

  showAlert(){
    Swal.fire({
      // title:"Alerta!",
      // html:'<p>Bienvenido</p>',
      icon:'success',
      // confirmButtonText:'OK',
      // cancelButtonText:'Cancelar'
    }).then((result) => {
      this.router.navigate(['home']);
    });
  }
}
