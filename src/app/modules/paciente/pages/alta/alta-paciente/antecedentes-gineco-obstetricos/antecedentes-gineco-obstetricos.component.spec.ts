import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesGinecoObstetricosComponent } from './antecedentes-gineco-obstetricos.component';

describe('AntecedentesGinecoObstetricosComponent', () => {
  let component: AntecedentesGinecoObstetricosComponent;
  let fixture: ComponentFixture<AntecedentesGinecoObstetricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntecedentesGinecoObstetricosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntecedentesGinecoObstetricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
