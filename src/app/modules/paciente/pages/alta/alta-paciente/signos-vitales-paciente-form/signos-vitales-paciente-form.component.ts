import { Component, forwardRef } from '@angular/core';
import { ISignosVitales } from '../../../../interfaces/signos-vitales-paciente.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Utilerias } from '../../../../../../utils/utilerias';

@Component({
  selector: 'app-signos-vitales-paciente-form',
  templateUrl: './signos-vitales-paciente-form.component.html',
  styleUrl: './signos-vitales-paciente-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SignosVitalesPacienteFormComponent),
    multi: true
  }]
})
export class SignosVitalesPacienteFormComponent implements ControlValueAccessor{

  constructor(){
    this.utils = new Utilerias();
  }


  signosVitales: ISignosVitales={
    peso : 0,
    talla : 0
  };

  mensajes : string[] = [];

  utils : Utilerias;
  imcCalculado : number = 0;
  onChange: any = () => {};
  onTouched: any = () => {};

  calcularIMC() : void {
    console.error("Entrando a funcion calcular imc");
    let peso : number = this.signosVitales.peso!;
    let imc : number = 0;
    let talla : number = this.signosVitales.talla!;
    if(peso > 0 && talla > 0) {
      imc = peso / (Math.pow(talla*0.01,2)); // Talla en metros, peso en kg
      this.signosVitales.imc = imc;
      console.error(`imc: ${this.signosVitales.imc}`);
    } else {
      this.signosVitales.imc = 0;
      console.error("Peso o talla no son validos para calcular el IMC");
    }
  }

  validarSignos() : void {
    if (this.signosVitales.peso! <= 0 || this.signosVitales.talla! <= 0) {
      this.mensajes[0]="Peso y talla deben ser mayores a cero";
    } else {
      this.mensajes[0] = "";
    }

    if (this.signosVitales.oxigenacion! < 90) {
      this.mensajes[1]="Oxigenación debe menor a 90%";
    } else {
      this.mensajes[1] = "";
    }

    if(this.signosVitales.frecuenciaCardiaca! < 60 || this.signosVitales.frecuenciaCardiaca! > 100) {
      this.mensajes[2] = "Frecuencia cardiaca debe estar entre 60 y 100 lpm";
    }else {
      this.mensajes[2] = "";
    }

    if(this.signosVitales.temperatura! < 36.1 || this.signosVitales.temperatura! > 37.2) {
      this.mensajes[3] = "Temperatura: "+this.signosVitales.temperatura+" °C";
    } else {
      this.mensajes[3] = "";
    }
  }

  writeValue(obj: ISignosVitales): void {
    this.signosVitales = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }
}
