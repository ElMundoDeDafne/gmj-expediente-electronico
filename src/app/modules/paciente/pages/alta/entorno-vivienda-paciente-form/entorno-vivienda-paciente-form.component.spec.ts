import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoViviendaPacienteFormComponent } from './entorno-vivienda-paciente-form.component';

describe('EntornoViviendaPacienteFormComponent', () => {
  let component: EntornoViviendaPacienteFormComponent;
  let fixture: ComponentFixture<EntornoViviendaPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntornoViviendaPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntornoViviendaPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
