import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploracionFisicaFormComponent } from './exploracion-fisica-form.component';

describe('ExploracionFisicaFormComponent', () => {
  let component: ExploracionFisicaFormComponent;
  let fixture: ComponentFixture<ExploracionFisicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploracionFisicaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploracionFisicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
