import { Component, forwardRef } from '@angular/core';
import { ISignosVitales } from '../../../../interfaces/signos-vitales-paciente.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  signosVitales: ISignosVitales={};
  onChange: any = () => {};
  onTouched: any = () => {};

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
