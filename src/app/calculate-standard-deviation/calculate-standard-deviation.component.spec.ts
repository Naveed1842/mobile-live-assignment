import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateStandardDeviationComponent } from './calculate-standard-deviation.component';

describe('CalculateStandardDeviationComponent', () => {
  let component: CalculateStandardDeviationComponent;
  let fixture: ComponentFixture<CalculateStandardDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateStandardDeviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateStandardDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
