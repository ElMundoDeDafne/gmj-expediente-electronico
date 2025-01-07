import { Component, forwardRef, Input } from '@angular/core';
import { INotaMedicaPac } from '../../../../interfaces/nota-medica-paciente.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IRecetaRequest } from '../../../../interfaces/request/receta-request.interface';
import { RecetaMedicaService } from '../../../../../../services/receta-medica-px.service';
import { IRecetaResponse } from '../../../../interfaces/response/receta-response.interface';
import { Utilerias } from '../../../../../../utils/utilerias';
import { IHojaFrontal, IInfoPaciente, IPaciente } from '../../../../interfaces/paciente.interface';

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

  @Input() infoPaciente : IHojaFrontal = {
    informacionPx: {},
    domicilioPaciente:{},
    datosContacto:{}
  };

  utils : Utilerias = new Utilerias();
  notasMedicasPx:INotaMedicaPac={};
  recetaRequest : IRecetaRequest = {
    codigo:'',
    parametros:[]
  };
  recetaResponse : IRecetaResponse = {
    base64:'',
    mensajes:[],
    exito:false
  };
  pdfSrc : string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private recetaMedicaService : RecetaMedicaService) { }

  generarReceta():void{
    console.log('Generar receta clic');
    this.generarObjetoRequestReceta();
  }

  writeValue(obj: INotaMedicaPac): void {
    this.notasMedicasPx = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  generarObjetoRequestReceta():void{

    if(this.recetaRequest != null) {
      this.recetaRequest.codigo = '';
      this.recetaRequest.parametros = [];
    }
    this.recetaRequest.codigo = 'RECETA_MEDICA';
    this.recetaRequest.parametros.push('NOMBRE_PACIENTE='+this.utils.obtenerNombreCompeto(this.infoPaciente.informacionPx));
    this.recetaRequest.parametros.push('DIAGNOSTICO_PACIENTE='+this.notasMedicasPx.impresionDiagnostica);
    this.recetaRequest.parametros.push('NOTAS_RECETA_OBSERV='+this.notasMedicasPx.analisisYComentarios);
    this.recetaRequest.parametros.push('FECHA_IMPRESION_REC='+this.utils.dateToStringWithTimeAmPm(new Date()));
    this.recetaRequest.parametros.push('NOMBRE_MEDICO='+this.notasMedicasPx.realizoNM);
    this.recetaRequest.parametros.push('CED_PROF='+this.notasMedicasPx.cedulaProfNM);
    this.recetaRequest.parametros.push('FOLIO_P='+'1001324657-1');
    this.recetaRequest.parametros.push('EDAD_PACIENTE='+this.infoPaciente.informacionPx.edad);
    this.recetaRequest.parametros.push('PX_TRATAMIENTO='+this.notasMedicasPx.tratamiento);

    this.recetaMedicaService.registrarObjetoReceta(this.recetaRequest).subscribe(
      data => {
        console.log('Respuesta receta medica: ',data);
        const arrayBuffer = this.base64ToArrayBuffer(data.base64);
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        this.pdfSrc = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href  = this.pdfSrc;
        a.download = 'receta-medica.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error => {
        console.error('Error al obtener base 64:', error);
      }
    );
  }

  base64ToArrayBuffer(base64:string):Uint8Array{
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
