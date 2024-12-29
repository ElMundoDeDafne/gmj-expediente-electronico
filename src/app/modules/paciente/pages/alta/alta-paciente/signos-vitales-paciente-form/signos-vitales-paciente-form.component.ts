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
  utils : Utilerias;
  imcCalculado : number = this.calcularIMC();
  onChange: any = () => {};
  onTouched: any = () => {};

  calcularIMC() : number {
    let peso : number = this.signosVitales.peso!;
    //let imc :number = this.utils.calcularIMC(this.signosVitales.talla!, this.signosVitales.peso!);
    //this.signosVitales.imc = imc;
    return 0;
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
