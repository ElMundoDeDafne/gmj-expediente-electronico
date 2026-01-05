import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicoIiFormComponent } from './historial-clinico-ii-form.component';

describe('HistorialClinicoIiFormComponent', () => {
  let component: HistorialClinicoIiFormComponent;
  let fixture: ComponentFixture<HistorialClinicoIiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialClinicoIiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialClinicoIiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
