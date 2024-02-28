import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPacienteFormComponent } from './informacion-paciente-form.component';

describe('InformacionPacienteFormComponent', () => {
  let component: InformacionPacienteFormComponent;
  let fixture: ComponentFixture<InformacionPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
