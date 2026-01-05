import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesPersonalesPatFormComponent } from './antecedentes-personales-pat-form.component';

describe('AntecedentesPersonalesPatFormComponent', () => {
  let component: AntecedentesPersonalesPatFormComponent;
  let fixture: ComponentFixture<AntecedentesPersonalesPatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntecedentesPersonalesPatFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntecedentesPersonalesPatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
