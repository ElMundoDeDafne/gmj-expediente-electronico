import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoHaComponent } from './censo-ha.component';

describe('CensoHaComponent', () => {
  let component: CensoHaComponent;
  let fixture: ComponentFixture<CensoHaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CensoHaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensoHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
