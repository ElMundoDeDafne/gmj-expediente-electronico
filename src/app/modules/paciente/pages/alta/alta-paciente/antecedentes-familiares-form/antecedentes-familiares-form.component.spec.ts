import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesFamiliaresFormComponent } from './antecedentes-familiares-form.component';

describe('AntecedentesFamiliaresFormComponent', () => {
  let component: AntecedentesFamiliaresFormComponent;
  let fixture: ComponentFixture<AntecedentesFamiliaresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntecedentesFamiliaresFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntecedentesFamiliaresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
