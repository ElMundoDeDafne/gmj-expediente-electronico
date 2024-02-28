import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}

ngOnInit(): void {
  // this.showAlert();
}

  // showAlert(){
  //   Swal.fire({
  //     html:`<b>Bievenido al sistema</b>
  //           <br>
  //           <p>Dafne Castillo Torres</p>
  //           <p>christian nogavas|kwajwjdkqj</p>`,
  //     confirmButtonText:'De acuerdo'
  //   }).then((result) => {
  //     this.router.navigate(['home']);
  //   });
  // }
}
