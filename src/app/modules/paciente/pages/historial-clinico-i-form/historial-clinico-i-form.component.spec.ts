import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicoIFormComponent } from './historial-clinico-i-form.component';

describe('HistorialClinicoIFormComponent', () => {
  let component: HistorialClinicoIFormComponent;
  let fixture: ComponentFixture<HistorialClinicoIFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialClinicoIFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialClinicoIFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
