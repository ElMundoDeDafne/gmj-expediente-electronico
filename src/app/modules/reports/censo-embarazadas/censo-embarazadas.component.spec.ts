import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoEmbarazadasComponent } from './censo-embarazadas.component';

describe('CensoEmbarazadasComponent', () => {
  let component: CensoEmbarazadasComponent;
  let fixture: ComponentFixture<CensoEmbarazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CensoEmbarazadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensoEmbarazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
