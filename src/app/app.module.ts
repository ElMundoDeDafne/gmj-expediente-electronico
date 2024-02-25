import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PacienteModule } from './modules/paciente/paciente.module';
import { TopMenuComponent } from './modules/pages/top/top-menu/top-menu.component';
import { FooterComponent } from './modules/pages/footer/footer/footer.component';
import { WelcomePageComponent } from './modules/pages/landing/welcome-page/welcome-page.component';
import { ExpedienteClinicoModule } from './modules/expediente-clinico/expediente-clinico.module';
import { NotasEnfermeriaModule } from './modules/notas-enfermeria/notas-enfermeria.module';
import { ConsultaMedicaModule } from './modules/consulta-medica/consulta-medica.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PacienteModule,
    ExpedienteClinicoModule,
    NotasEnfermeriaModule,
    ConsultaMedicaModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
