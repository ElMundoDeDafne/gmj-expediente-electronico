import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PacienteModule } from './modules/paciente/paciente.module';
import { TopMenuComponent } from './pages/top/top-menu/top-menu.component';
import { FooterComponent } from './pages/footer/footer/footer.component';
import { WelcomePageComponent } from './pages/landing/welcome-page/welcome-page.component';
import { WelcomeAlertComponent } from './pages/alerts/welcome-alert/welcome-alert.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StillOnWorkPageComponent } from './pages/still-on-work-page/still-on-work-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InmunizacionesFormComponent } from './modules/paciente/pages/alta/inmunizaciones-form/inmunizaciones-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    WelcomePageComponent,
    WelcomeAlertComponent,
    NotFoundPageComponent,
    StillOnWorkPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PacienteModule,
    ReportsModule,
    AuthorizationModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
