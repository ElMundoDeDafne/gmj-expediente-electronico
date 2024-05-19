import { Component, forwardRef } from '@angular/core';
import { IDomicilioPaciente } from '../../../../interfaces/domicilio-paciente.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-domicilio-paciente-form',
  templateUrl: './domicilio-paciente-form.component.html',
  styleUrl: './domicilio-paciente-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DomicilioPacienteFormComponent),
    multi: true
  }]
})
export class DomicilioPacienteFormComponent implements ControlValueAccessor{

  domicilioForm : FormGroup;
  constructor(private formBuilder : FormBuilder){
    this.domicilioForm = this.formBuilder.group({
      codigoPostal:['',[
        Validators.required
      ]],
      callePrincipal:['',[
        Validators.required
      ]],
      numeroCalle:['',[
        Validators.required
      ]],
      estado:['',[
        Validators.required
      ]],
      localidad:['',[
        Validators.required
      ]],
      municipio:['',[
        Validators.required
      ]]
    })
  }


  domicilio: IDomicilioPaciente={};
  onChange: any = () => {};
  onTouched: any = () => {};

   writeValue(obj: IDomicilioPaciente): void {
     this.domicilio = obj;
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
