import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEnfermeriaFormComponent } from './notas-enfermeria-form.component';

describe('NotasEnfermeriaFormComponent', () => {
  let component: NotasEnfermeriaFormComponent;
  let fixture: ComponentFixture<NotasEnfermeriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasEnfermeriaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasEnfermeriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
