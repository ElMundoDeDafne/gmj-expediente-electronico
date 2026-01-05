import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContactoPacienteFormComponent } from './datos-contacto-paciente-form.component';

describe('DatosContactoPacienteFormComponent', () => {
  let component: DatosContactoPacienteFormComponent;
  let fixture: ComponentFixture<DatosContactoPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosContactoPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosContactoPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
