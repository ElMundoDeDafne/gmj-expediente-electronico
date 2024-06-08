import { Component, forwardRef } from '@angular/core';
import { IAntecedentesGinecoObstetricos } from '../../../../interfaces/antecedentes-g-obstetricos.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

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
  bsValue : Date = new Date();
  antecedentesForm:FormGroup;
  constructor(private formBuilder : FormBuilder){
    this.antecedentesForm = this.formBuilder.group({

    });
  }

  mensaje : string = '';
  antecedentesGinecobstetricos: IAntecedentesGinecoObstetricos={
    numAborts:0,
    numGestas:0,
    numCesareas:0,
    numPartos:0,
    hijosVivos:0
  };
  onChange: any = () => {};
  onTouched: any = () => {};

  actualizarValorFecha(id:string,value:string|undefined):void{
    if(id === 'fechaUltimoParto') {
      this.antecedentesGinecobstetricos.fechaUltimoParto = value;
    } else if (id === 'fechaUltimaCitologia'){
      this.antecedentesGinecobstetricos.fechaUltimaCitologia = value;
    } else if (id === 'fechaUltimoParto') {
      this.antecedentesGinecobstetricos.fechaUltimoParto = value;
    } else if (id === 'fechaUltimaRegla') {
      this.antecedentesGinecobstetricos.fechaUltimaRegla = value;
    } else if (id === 'inicioVidaSexual') {
      this.antecedentesGinecobstetricos.inicioVidaSexual = value;
    }
  }

  registraCheckbox(event:any,id:string):void{
    if (event.target.checked) {
        (<HTMLInputElement> document.getElementById(id)).disabled = true;
        (<HTMLInputElement> document.getElementById(id)).value = 'NO RECUERDA';
        this.actualizarValorFecha(id,undefined);
    } else {
      (<HTMLInputElement> document.getElementById(id)).disabled = false;
      (<HTMLInputElement> document.getElementById(id)).value = '';
      this.actualizarValorFecha(id,'');
    }
  }


  asignarValor(objeto:any,valor:any):void{
    if(objeto!==undefined) {
      valor = objeto;
    }
  }

  validarNumeroGestas():boolean {
    let numeroCesareas : number|undefined = 0;
    let numeroPartos : number|undefined = 0;
    let numeroAbortos : number|undefined = 0;
    let totalPartosYCesareas : number|undefined = 0;
    let numeroGestas : number|undefined  = 0;

    if (this.antecedentesGinecobstetricos.numPartos !== undefined) {
      numeroPartos = this.antecedentesGinecobstetricos.numPartos;
    }
    if (this.antecedentesGinecobstetricos.numCesareas !== undefined) {
        numeroCesareas = this.antecedentesGinecobstetricos.numCesareas;
    }
    if (this.antecedentesGinecobstetricos.numGestas !== undefined) {
        numeroGestas = this.antecedentesGinecobstetricos.numGestas;
    }
    if(this.antecedentesGinecobstetricos.numAborts !== undefined) {
      numeroAbortos = this.antecedentesGinecobstetricos.numAborts;
    }

    totalPartosYCesareas = numeroCesareas+numeroPartos+numeroAbortos;

    if(numeroGestas!=null && totalPartosYCesareas != numeroGestas){
      this.mensaje = `No coincide el total de gestas: ${numeroGestas}`;
      return true;
    }
    return false;
    }

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
