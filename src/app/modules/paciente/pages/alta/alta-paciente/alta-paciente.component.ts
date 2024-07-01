import { Component,ViewEncapsulation } from '@angular/core';
import { IPaciente } from '../../../interfaces/paciente.interface';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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

  recuperaDatoTemporal(event:any):void{
    const tab : string = event.tab.textLabel;
    console.error(`Valor de LS: ${localStorage.getItem('GEN_PX')}`);
    if(localStorage.getItem('GEN_PX') != null && tab === 'Hist. Clinica') {
      this.x = localStorage.getItem('GEN_PX');
    }
  }

  constructor(){  }

  public paciente : IPaciente = {
    hojaFrontal: {
      informacionPx: {},
      domicilioPaciente:{},
      datosContacto:{}
    },
    historiaClinica: {
      antecedentesHdoFamiliares:[{}],
      antecedentesGinecobstetricos:{fechaUltimaCitologia:'',fechaUltimaRegla:'',fechaUltimoParto:'',hijosVivos:0,numAborts:0,numCesareas:0,numGestas:0,numPartos:0,inicioVidaSexual:''},
      antecNoPatologicos:{
        conceptoFauna:[{concepto:'Perros',situacion:''},{concepto:'Gatos',situacion:''},{concepto:'Otros',situacion:'',otros:''}],
        conceptoVivienda:[{concepto:'Luz',situacion:''},{concepto:'Agua',situacion:''},{concepto:'Drenaje',situacion:''}],
        concepto:[
          {concepto:'Dieta',situacion:''},
          {concepto:'Vivienda',situacion:''},
          {concepto:'Promiscuidad',situacion:''},
          {concepto:'Hacinamiento',situacion:''}
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
      impresionDiagnostica:[],
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
    }
  }

  verdatos():void {
    console.error(this.paciente);
  }
}
