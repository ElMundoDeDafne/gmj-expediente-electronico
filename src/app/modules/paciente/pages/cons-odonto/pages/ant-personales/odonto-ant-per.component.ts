import { Component, forwardRef } from "@angular/core";
import { Utilerias } from "../../../../../../utils/utilerias";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IConsultaEstomatologia } from "../../../../interfaces/cons-estomatologia.interface";
import { threadId } from "worker_threads";

@Component({
  selector: 'app-odonto-ant-per',
  templateUrl: 'odonto-ant-per.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => this),
    multi: true
  }]
})

export class OdontoPerComponent implements ControlValueAccessor{

  constructor(){
    this.utils=new Utilerias();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: IConsultaEstomatologia): void {
    this.antecPersOdont = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

  antecedentesChkbox:string[]=['Diabetico','Hipertennso','asmatico','vih/sida','tuberculoso','cardiopata','quirurgico','alergias','hepatitis','hemofilico','cardiovasculares','otros'];
  selecciones:string[]=[];
  observaciones:string='';
  antecEspecifico!:string;
  utils:Utilerias;
  antecPersOdont! : IConsultaEstomatologia;


  contieneOtros(sel:string[]):boolean {
    return sel.some(s=>s.toLowerCase() === 'otros');
  }

  onCheckboxChange(event: any) {
    const opcion = event.target.value;
    const isChecked = event.target.checked;

    // Agrega la opción seleccionada o quita la deseleccionada del array
    if (isChecked) {
      this.selecciones.push(opcion);
      this.antecPersOdont.antecedentesPersonales.enfermedades = this.selecciones;
    } else {
      const index = this.selecciones.indexOf(opcion);
      if (index > -1) {
        this.selecciones.splice(index, 1); // Elimina el elemento del array
        this.antecPersOdont.antecedentesPersonales.enfermedades = this.selecciones;
      }
    }
  }
}
