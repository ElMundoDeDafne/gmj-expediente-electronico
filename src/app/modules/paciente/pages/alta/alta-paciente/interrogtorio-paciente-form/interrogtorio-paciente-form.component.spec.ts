import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrogtorioPacienteFormComponent } from './interrogtorio-paciente-form.component';

describe('InterrogtorioPacienteFormComponent', () => {
  let component: InterrogtorioPacienteFormComponent;
  let fixture: ComponentFixture<InterrogtorioPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterrogtorioPacienteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterrogtorioPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
