import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDatosContactoPaciente } from '../../../../interfaces/datos-contacto-paciente.interface';

@Component({
  selector: 'app-datos-contacto-paciente-form',
  templateUrl: './datos-contacto-paciente-form.component.html',
  styleUrl: './datos-contacto-paciente-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => this),
    multi: true
  }]
})
export class DatosContactoPacienteFormComponent implements ControlValueAccessor{
  datosContacto: IDatosContactoPaciente={};
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: IDatosContactoPaciente): void {
    this.datosContacto = obj;
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
