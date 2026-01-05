import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoCronicosComponent } from './censo-cronicos.component';

describe('CensoCronicosComponent', () => {
  let component: CensoCronicosComponent;
  let fixture: ComponentFixture<CensoCronicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CensoCronicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensoCronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
