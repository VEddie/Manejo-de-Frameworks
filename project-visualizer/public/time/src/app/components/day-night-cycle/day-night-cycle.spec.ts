import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNightCycle } from './day-night-cycle';

describe('DayNightCycle', () => {
  let component: DayNightCycle;
  let fixture: ComponentFixture<DayNightCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayNightCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayNightCycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
