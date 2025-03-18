import { Component,ViewEncapsulation } from '@angular/core';
import { IHojaFrontal, IInfoPaciente, IPaciente } from '../../../interfaces/paciente.interface';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HojaFrontalService } from '../../../../../services/frontal.service';
import { IHojaFrontalRequest } from '../../../interfaces/request/frontal-request.interface';
import { AlertGeneratorService } from '../../../../../pages/alerts/alert-generator/alert-generator.service';
import { Utilerias } from '../../../../../utils/utilerias';
// import { AlertGeneratorService } from '../../../../../../pages/alerts/alert-generator/alert-generator.service';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrl: './alta-paciente.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class AltaPacienteComponent {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      //8hrs: 6 am 2 pm 10 pm
      //12 hrs 10 pm y 10 am

      // Highlight the 1st and 20th day of each month.
      // return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  x : string | null = null;
  hmInfoPx : Map<string,string> = new Map<string,string>();
  utils : Utilerias;

  recuperaDatoTemporal(event:any):void{
    const tab : string = event.tab.textLabel;
    console.error(`Valor de LS: ${localStorage.getItem('GEN_PX')}`);
      if(localStorage.getItem('GEN_PX') !== null && tab === 'Hist. Clinica') {
        this.x = localStorage.getItem('GEN_PX');
      }
  }

  infoPaciente : IHojaFrontal = {
    informacionPx: {},
    domicilioPaciente:{},
    datosContacto:{}
  };
  msg : string = "";

  requestFrontal : IHojaFrontalRequest = {
    informacionPx : {},
    domicilioPaciente : {},
    datosContacto : {},
    historiaClinica : {}
  }

  constructor(private alertas:AlertGeneratorService,private hojaFrontalService: HojaFrontalService) {
    this.utils = new Utilerias();
  }
//@Inject(AlertGeneratorService) private alertasService: AlertGeneratorService
  //constructor(private hojaFrontalService : HojaFrontalService, @Inject(AlertGeneratorService) private alertasService : AlertGeneratorService){  }

  paciente : IPaciente = {
    hojaFrontal: {
      informacionPx: {},
      domicilioPaciente:{},
      datosContacto:{}
    },
    historiaClinica: {
      antecedentesHdoFamiliares:[{}],
      antecedentesGinecobstetricos:{fechaUltimaCitologia:'',fechaUltimaRegla:'',fechaUltimoParto:'',hijosVivos:0,numAborts:0,numCesareas:0,numGestas:0,numPartos:0,inicioVidaSexual:''},
      antecNoPatologicos:{
        conceptoFauna:[{concepto:'Perros',situacion:false},{concepto:'Gatos',situacion:false},{concepto:'Otros',situacion:false,otros:''}],
        conceptoVivienda:[{concepto:'Luz',situacion:false},{concepto:'Agua',situacion:false},{concepto:'Drenaje',situacion:false}],
        concepto:[
          {concepto:'Dieta',situacion:false},
          {concepto:'Vivienda',situacion:false},
          {concepto:'Promiscuidad',situacion:false},
          {concepto:'Hacinamiento',situacion:false}
        ],
        inmunizaciones:[{}]
},
      antecPatologicos:[{}],
      interrogPx:{
        exploracionesFisicas: [
        {
          zonaInspeccion: 'Piel y Faneras',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Cabeza y Organos de los Sentidos',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Cuello',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Torax',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Abdomen',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Columna Vertebral',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Genitales',
          observacionesInspeccion: ''
        }, {
          zonaInspeccion: 'Ano y Recto',
          observacionesInspeccion: ''
        },],
      aparatoYSistemas: [
      {
        concepto: 'Exploracion Vaginal',
        semioloia: ''
      }, {
        concepto: 'Extremidades',
        semioloia: ''
      }, {
        concepto: 'Organos de los sentidos',
        semioloia: ''
      }, {
        concepto: 'Sistema nervioso central',
        semioloia: ''
      }, {
        concepto: 'Sistema nervioso periferico',
        semioloia: ''
      }, {
        concepto: 'Aparato Respiratorio',
        semioloia: ''
      }, {
        concepto: 'Sistema Cardivascular',
        semioloia: ''
      }, {
        concepto: 'Aparato Digestivo',
        semioloia: ''
      }, {
        concepto: 'Aparato Renal y Urinario',
        semioloia: ''
      }, {
        concepto: 'Aparato Genital',
        semioloia: ''
      }, {
        concepto: 'Sistema Esqueletico y Muscular',
        semioloia: ''
      }]}
    },
    notaMedicaPaciente: {
      cedulaProfNM:'',
      exploracion:'',
      hallazgos:'',
      recomendaciones:'',
      impresionDiagnostica:'',
      realizoNM:''
    },
    notaEnfermeriaPx: {
      accionesDxEnf:'',
      accionesNEnf:'',
      cedulaProfNEnf:'',
      realizoNEnf:'',
      resultadosNEnf:'',
      signosVitales:{
        temperatura:0,
        frecuenciaCardiaca:0,
        presionDiast:0,
        presionSist:0,
        cuentaConAyuno:'false'
      }
    },
    consultaOdontologia:{
      hojaFrontalOdonto:{
        nombreUno:''
      },
      antecedentesFam:{},
      antecedentesPersonales:{},
      domicilio:{},
      observaciones:{}
    }
  }

  registroPaciente():void {
    this.requestFrontal.informacionPx = this.paciente.hojaFrontal.informacionPx;
    this.requestFrontal.domicilioPaciente = this.paciente.hojaFrontal.domicilioPaciente;
    this.requestFrontal.datosContacto = this.paciente.hojaFrontal.datosContacto;
    this.requestFrontal.historiaClinica = this.paciente.historiaClinica;
    this.msg = "";

    this.hojaFrontalService.registrarObjetoReceta(this.requestFrontal).subscribe(
      data => {
        console.error('Respuesta registro paciente: ',data);
        this.alertas.ventanaError('Registro exitoso');
      },
      error => {
        this.msg = this.utils.manejarErrorServicios(error);
        this.alertas.ventanaError(this.msg);
        // this.msg = error.error.error;
        // console.error(this.msg);
        // if(error.name === 'HttpErrorResponse'){
        //   console.error('Error al registrar paciente (HttpErrorResponse): ',error.name);
        //   this.alertas.ventanaError(`Error con el servicio. (${error.name})`);
        // }

        // if(this.msg === undefined) {
        //   this.alertas.ventanaError(`No es posible registrar paciente con informacion vacia`);
        //   console.error('Error al registrar paciente: ',error);
        // } else {
        //   this.alertas.ventanaError(`Error al registrar paciente: ${error.error.error}`);
        //   console.error('Error al registrar paciente: ',error);
        // }
      }
    );
    //paciente

//IHojaFrontalRequest,IHojaFrontalResponse
/**
 *   informacionPx : IInfoPaciente;
   domicilioPaciente : IDomicilioPaciente;
   datosContacto : IDatosContactoPaciente;
   historiaClinica : IHistClinica;
 *
 */

    //this.hojaFrontalService.

    /***
     *     this.recetaRequest.codigo = 'RECETA_MEDICA';
    this.recetaRequest.parametros.push('NOMBRE_PACIENTE='+this.utils.obtenerNombreCompeto(this.infoPaciente.informacionPx));
    this.recetaRequest.parametros.push('DIAGNOSTICO_PACIENTE='+this.notasMedicasPx.impresionDiagnostica);
    this.recetaRequest.parametros.push('NOTAS_RECETA_OBSERV='+this.notasMedicasPx.analisisYComentarios);
    this.recetaRequest.parametros.push('FECHA_IMPRESION_REC='+this.utils.dateToStringWithTimeAmPm(new Date()));
    this.recetaRequest.parametros.push('NOMBRE_MEDICO='+this.notasMedicasPx.realizoNM);
    this.recetaRequest.parametros.push('CED_PROF='+this.notasMedicasPx.cedulaProfNM);
    this.recetaRequest.parametros.push('FOLIO_P='+this.infoPaciente.informacionPx.folio);
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
     *
     *
    */
  }

  verdatos():void {
    console.error(this.paciente);
  }


}
