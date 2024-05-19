import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { IDatosContactoPaciente } from '../../../../interfaces/datos-contacto-paciente.interface';

@Component({
  selector: 'app-datos-contacto-paciente-form',
  templateUrl: './datos-contacto-paciente-form.component.html',
  styleUrl: './datos-contacto-paciente-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatosContactoPacienteFormComponent),
    multi: true
  }]
})
export class DatosContactoPacienteFormComponent implements ControlValueAccessor{

   datosContactoForm : FormGroup;
   constructor(private formBuilder : FormBuilder){
     this.datosContactoForm = this.formBuilder.group({
       email:['',[
         Validators.email
       ]],
       numeroTelefonico:['',[
         Validators.required,
         Validators.pattern('^(?:\\+\\d{1,3})?[\\s.-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')
       ]]
     })
   }

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
