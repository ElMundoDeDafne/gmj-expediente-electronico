import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillOnWorkPageComponent } from './still-on-work-page.component';

describe('StillOnWorkPageComponent', () => {
  let component: StillOnWorkPageComponent;
  let fixture: ComponentFixture<StillOnWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StillOnWorkPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StillOnWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
