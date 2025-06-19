import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryCharge } from './battery-charge';

describe('BatteryCharge', () => {
  let component: BatteryCharge;
  let fixture: ComponentFixture<BatteryCharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryCharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryCharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
