import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignosVitalesPacienteFormComponent } from './signos-vitales-paciente-form.component';

describe('SignosVitalesPacienteFormComponent', () => {
  let component: SignosVitalesPacienteFormComponent;
  let fixture: ComponentFixture<SignosVitalesPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignosVitalesPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignosVitalesPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
