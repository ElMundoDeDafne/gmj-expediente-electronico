import { Component, forwardRef } from '@angular/core';
import { INotaMedicaPac } from '../../../../interfaces/nota-medica-paciente.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-notas-medicas-form',
  templateUrl: './notas-medicas-form.component.html',
  styleUrl: './notas-medicas-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NotasMedicasFormComponent),
    multi: true
  }]
})
export class NotasMedicasFormComponent implements ControlValueAccessor{
  notasMedicasPx:INotaMedicaPac={};
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: INotaMedicaPac): void {
    this.notasMedicasPx = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
