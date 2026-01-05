import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesPersonalesNoPatologicosFormComponent } from './antecedentes-pers-np-form.component';

describe('AntecedentesPersonalesNoPatologicosFormComponent', () => {
  let component: AntecedentesPersonalesNoPatologicosFormComponent;
  let fixture: ComponentFixture<AntecedentesPersonalesNoPatologicosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntecedentesPersonalesNoPatologicosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecedentesPersonalesNoPatologicosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
