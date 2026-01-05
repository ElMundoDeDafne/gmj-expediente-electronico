import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioPacienteFormComponent } from './domicilio-paciente-form.component';

describe('DomicilioPacienteFormComponent', () => {
  let component: DomicilioPacienteFormComponent;
  let fixture: ComponentFixture<DomicilioPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomicilioPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomicilioPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
