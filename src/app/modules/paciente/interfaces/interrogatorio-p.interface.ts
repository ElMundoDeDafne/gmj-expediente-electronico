export interface IInterrogatorioPaciente {
  aparatoYSistemas:IApYSintomasPac[],
  exploracionesFisicas:IExploracionFisica[]
}

interface IApYSintomasPac {
  claveConcepto?:string,
  concepto:string,
  semioloia:string
}

interface IExploracionFisica {
  zonaInspeccion:string,
  observacionesInspeccion:string
}
