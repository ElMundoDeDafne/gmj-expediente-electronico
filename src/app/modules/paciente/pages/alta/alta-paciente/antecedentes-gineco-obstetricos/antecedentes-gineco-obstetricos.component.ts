import { Component, forwardRef } from '@angular/core';
import { IAntecedentesGinecoObstetricos } from '../../../../interfaces/antecedentes-g-obstetricos.interface';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { deprecate } from 'util';

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
  generoPaciente : string|null = '';

  validaLocalStorage(){
    console.error('entrando a metodo');
    console.error(localStorage.getItem('GEN_PX'));
    if(localStorage.getItem('GEN_PX') != null){
      this.generoPaciente = localStorage.getItem('GEN_PX');
      console.error(this.generoPaciente);
    }
  }

  constructor(private formBuilder : FormBuilder){
    //this.validaLocalStorage();
    this.antecedentesForm = this.formBuilder.group({
      hijosVivos:['',[Validators.pattern('^-?[0-9]+$')]],
      numAborts:['',[Validators.pattern('^-?[0-9]+$')]],
      numPartos:['',[Validators.pattern('^-?[0-9]+$')]],
      numGestas:['',[Validators.pattern('^-?[0-9]+$')]],
      numCesareas:['',[Validators.pattern('^-?[0-9]+$')]]
    });
  }

  mensaje : string = '';
  antecedentesGinecobstetricos: IAntecedentesGinecoObstetricos={

  };
  onChange: any = () => {};
  onTouched: any = () => {};

  sinHijos(event:any):void{
    if (event.target.checked) {
      (<HTMLInputElement> document.getElementById('numGestas')).disabled = true;
      (<HTMLInputElement> document.getElementById('numCesareas')).disabled = true;
      (<HTMLInputElement> document.getElementById('numAborts')).disabled = true;
      (<HTMLInputElement> document.getElementById('numPartos')).disabled = true;
      (<HTMLInputElement> document.getElementById('hijosVivos')).disabled = true;
    } else {
      (<HTMLInputElement> document.getElementById('numGestas')).disabled = false;
      (<HTMLInputElement> document.getElementById('numCesareas')).disabled = false;
      (<HTMLInputElement> document.getElementById('numAborts')).disabled = false;
      (<HTMLInputElement> document.getElementById('numPartos')).disabled = false;
      (<HTMLInputElement> document.getElementById('hijosVivos')).disabled = false;
    }
  }

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
        (<HTMLInputElement> document.getElementById(id)).value = 'NO RECUERDA';
        (<HTMLInputElement> document.getElementById(id)).disabled = true;
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

  validarNumeroGestas():void {
    let numeroCesareas : number = 0;
    let numeroPartos : number = 0;
    let numeroAbortos : number = 0;
    let totalPartosYCesareas : number = 0;
    let numeroGestas : number  = 0;
    let hijosVivos : number = 0;

     if (this.antecedentesGinecobstetricos.numPartos !== undefined) {
        numeroPartos = this.antecedentesGinecobstetricos.numPartos;
     }
     if (this.antecedentesGinecobstetricos.numCesareas !== undefined){
        numeroCesareas = this.antecedentesGinecobstetricos.numCesareas;
     }
     if(this.antecedentesGinecobstetricos.numAborts !== undefined) {
        numeroAbortos = this.antecedentesGinecobstetricos.numAborts;
     }
    totalPartosYCesareas = parseInt(numeroCesareas.toString())+parseInt(numeroPartos.toString())+parseInt(numeroAbortos.toString());
    hijosVivos = parseInt(numeroCesareas.toString()) + parseInt(numeroPartos.toString());
    this.antecedentesGinecobstetricos.numGestas = totalPartosYCesareas;
    if(this.antecedentesGinecobstetricos.hijosVivos !== undefined) {
      this.antecedentesGinecobstetricos.hijosVivos = hijosVivos<0?0:hijosVivos;
    }
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
