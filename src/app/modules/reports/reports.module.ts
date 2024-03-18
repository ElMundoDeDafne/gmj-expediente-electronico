import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CensoEmbarazadasComponent } from './censo-embarazadas/censo-embarazadas.component';
import { CensoCronicosComponent } from './censo-cronicos/censo-cronicos.component';
import { CensoHaComponent } from './censo-ha/censo-ha.component';
import { CensoGeneralComponent } from './censo-general/censo-general.component';



@NgModule({
  declarations: [
    CensoEmbarazadasComponent,
    CensoCronicosComponent,
    CensoHaComponent,
    CensoGeneralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
