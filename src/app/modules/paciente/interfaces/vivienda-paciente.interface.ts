import { IMascotaVivienda } from "./mascotas-vivienda.interface";

export interface IViviendaPaciente {
  tipoVivienda?:string;
  totalCuartos?:number;
  totalHabitantes?:number;
  hayMascotas?:boolean;
  mascotas?:IMascotaVivienda[];
  existeFaunaNoc?:boolean;
  faunaNocivaAnimal?:string[]; //ratas, cucarachas, pulgas
  viveEnAsinamiento?:boolean;
  existenBasureros?:boolean;
  existeMaleza?:boolean;
}
