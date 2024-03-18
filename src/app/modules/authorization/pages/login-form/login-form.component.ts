import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginAuth } from './interfaces/ILoginAuth.interface';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

constructor(private router: Router){}

  validaUsuarios():void{
    console.log('ENTRANDO A METODO VALIDA USUARIOS');
    if(this.usuarioCredenciales.usuario==='admin' && this.usuarioCredenciales.passw==='admin'){
      this.router.navigate(['/home']);
      console.log(`${this.usuarioCredenciales.usuario}`);
      console.log(`${this.usuarioCredenciales.passw}`);
      console.log('credenciales validas');
    } else {
      console.log(`${this.usuarioCredenciales.usuario}`);
      console.log(`${this.usuarioCredenciales.passw}`);
      console.log('CREDENCIAS NO VALIDAS');
    }
  }

  public usuarioCredenciales:ILoginAuth={
  }
}


