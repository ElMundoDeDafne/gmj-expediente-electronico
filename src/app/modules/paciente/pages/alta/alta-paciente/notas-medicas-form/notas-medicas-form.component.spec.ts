import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasMedicasFormComponent } from './notas-medicas-form.component';

describe('NotasMedicasFormComponent', () => {
  let component: NotasMedicasFormComponent;
  let fixture: ComponentFixture<NotasMedicasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasMedicasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotasMedicasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
