import { Component, forwardRef } from '@angular/core';
import { IAntecedentesGinecoObstetricos } from '../../../../interfaces/antecedentes-g-obstetricos.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-antecedentes-gineco-obstetricos',
  templateUrl: './antecedentes-gineco-obstetricos.component.html',
  styleUrl: './antecedentes-gineco-obstetricos.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AntecedentesGinecoObstetricosComponent),
    multi: true
  }]
})
export class AntecedentesGinecoObstetricosComponent  implements ControlValueAccessor {
  antecedentesGinecobstetricos: IAntecedentesGinecoObstetricos={};
  onChange: any = () => {};
  onTouched: any = () => {};

   writeValue(obj: IAntecedentesGinecoObstetricos): void {
     this.antecedentesGinecobstetricos = obj;
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
