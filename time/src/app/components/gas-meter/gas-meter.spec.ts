import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasMeter } from './gas-meter';

describe('GasMeter', () => {
  let component: GasMeter;
  let fixture: ComponentFixture<GasMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
