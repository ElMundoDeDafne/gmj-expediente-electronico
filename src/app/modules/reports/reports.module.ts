import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CensoEmbarazadasComponent } from './censo-embarazadas/censo-embarazadas.component';
import { CensoCronicosComponent } from './censo-cronicos/censo-cronicos.component';
import { CensoHaComponent } from './censo-ha/censo-ha.component';
import { CensoGeneralComponent } from './censo-general/censo-general.component';
import { CensoEstomatologiaComponent } from './censo-estomat/censo-estomat.component';



@NgModule({
  declarations: [
    CensoEmbarazadasComponent,
    CensoCronicosComponent,
    CensoHaComponent,
    CensoGeneralComponent,
    CensoEstomatologiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
