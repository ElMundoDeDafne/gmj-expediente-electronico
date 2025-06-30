import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AltaPersonalComponent } from "./pages/alta-personal-gui/alta-per.component";

@NgModule({
  declarations: [
    AltaPersonalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AltaPersonalComponent]
})
export class PersonalModule { }
