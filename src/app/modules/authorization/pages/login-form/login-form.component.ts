import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginAuth } from './interfaces/ILoginAuth.interface';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

constructor(private router: Router){}
  mensajeError : string = '';

  @ViewChild('mensajeErrorP')
  mensajeErrorP! : ElementRef<HTMLBodyElement>; //accedemos a DOM de forma segura

  validaUsuarios():void{
    console.log('ENTRANDO A METODO VALIDA USUARIOS');
    if(this.usuarioCredenciales.usuario==='admin' && this.usuarioCredenciales.passw==='admin'){
      this.router.navigate(['/success']);
    } else {
      this.mensajeError = 'Usuario o contraseña erroneos'.toUpperCase();
      this.mensajeErrorP.nativeElement.innerHTML=this.mensajeError;
    }
  }

  public usuarioCredenciales:ILoginAuth={
  }
}


