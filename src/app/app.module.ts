import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PacienteModule } from './modules/paciente/paciente.module';
import { ExpedienteClinicoModule } from './modules/expediente-clinico/expediente-clinico.module';
import { NotasEnfermeriaModule } from './modules/notas-enfermeria/notas-enfermeria.module';
import { ConsultaMedicaModule } from './modules/consulta-medica/consulta-medica.module';
import { TopMenuComponent } from './pages/top/top-menu/top-menu.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { WelcomePageComponent } from './pages/landing/welcome-page/welcome-page.component';
import { WelcomeAlertComponent } from './pages/alerts/welcome-alert/welcome-alert.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StillOnWorkPageComponent } from './pages/still-on-work-page/still-on-work-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    WelcomePageComponent,
    WelcomeAlertComponent,
    NotFoundPageComponent,
    StillOnWorkPageComponent
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
