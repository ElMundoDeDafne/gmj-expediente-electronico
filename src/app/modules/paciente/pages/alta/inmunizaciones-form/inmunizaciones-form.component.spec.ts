import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunizacionesFormComponent } from './inmunizaciones-form.component';

describe('InmunizacionesFormComponent', () => {
  let component: InmunizacionesFormComponent;
  let fixture: ComponentFixture<InmunizacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmunizacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmunizacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
