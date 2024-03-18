import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoGeneralComponent } from './censo-general.component';

describe('CensoGeneralComponent', () => {
  let component: CensoGeneralComponent;
  let fixture: ComponentFixture<CensoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CensoGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
