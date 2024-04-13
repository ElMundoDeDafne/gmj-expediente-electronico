import { Component, forwardRef } from '@angular/core';
import { IInterrogatorioPaciente } from '../../../../interfaces/interrogatorio-p.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-interrogtorio-paciente-form',
  templateUrl: './interrogtorio-paciente-form.component.html',
  styleUrl: './interrogtorio-paciente-form.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InterrogtorioPacienteFormComponent),
    multi: true
  }]
})
export class InterrogtorioPacienteFormComponent implements ControlValueAccessor {

  interrogatorio: IInterrogatorioPaciente = {
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
    }]
  };

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(obj: IInterrogatorioPaciente): void {
    this.interrogatorio = obj;
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
