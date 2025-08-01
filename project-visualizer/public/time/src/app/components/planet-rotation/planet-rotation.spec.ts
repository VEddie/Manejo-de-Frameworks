import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRotation } from './planet-rotation';

describe('PlanetRotation', () => {
  let component: PlanetRotation;
  let fixture: ComponentFixture<PlanetRotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetRotation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetRotation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
