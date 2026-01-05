import { Component, forwardRef } from '@angular/core';
import { IEsquemaVacunacionPac } from '../../../../interfaces/esquema-vac-pac.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inmunizaciones-form',
  templateUrl: './inmunizaciones-form.component.html',
  styleUrl: './inmunizaciones-form.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InmunizacionesFormComponent),
    multi: true
  }]
})
export class InmunizacionesFormComponent implements ControlValueAccessor {
  inmunizacion:IEsquemaVacunacionPac={};
  inmunizaciones:IEsquemaVacunacionPac[]=[];
  bsValue : Date = new Date();
  biologicos : string[] = [
    "BCG","Hepatitis B","Pentavalente","Rotavirus",
    "Neumocócica conjugada","Sarampión, Rubéola y Paperas (SRP)","Vacuna contra el VPH",
    "Difteria y Tétanos","Influenza","Neumocócica (adultos)",
    "Hepatitis B (en grupos de riesgo)","Vacuna contra COVID-19","Fiebre amarilla (para viajeros)"];
  biologicoSeleccionado : string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: IEsquemaVacunacionPac[]): void {
    this.inmunizaciones = obj;
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

  agregarInput():void{
    const nuevoAntecedente:IEsquemaVacunacionPac={
      fechaAplicacion:'',
      biologicoNombre:''
    };
    this.inmunizaciones.push(nuevoAntecedente);
  }

  eliminar(pos:number):void{
    this.inmunizaciones.splice(pos,1);
  }

  hola(evento : Date):void{
    window.alert(evento);
    }
}
