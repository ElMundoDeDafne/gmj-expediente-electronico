import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoViviendaFormComponent } from './entorno-vivienda-form.component';

describe('EntornoViviendaFormComponent', () => {
  let component: EntornoViviendaFormComponent;
  let fixture: ComponentFixture<EntornoViviendaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntornoViviendaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntornoViviendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
