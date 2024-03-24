import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionesGeneralesPacienteFormComponent } from './inspecciones-generales-paciente-form.component';

describe('InspeccionesGeneralesPacienteFormComponent', () => {
  let component: InspeccionesGeneralesPacienteFormComponent;
  let fixture: ComponentFixture<InspeccionesGeneralesPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspeccionesGeneralesPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspeccionesGeneralesPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
