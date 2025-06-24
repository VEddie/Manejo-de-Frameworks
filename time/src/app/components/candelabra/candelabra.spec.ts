import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candelabra } from './candelabra';

describe('Candelabra', () => {
  let component: Candelabra;
  let fixture: ComponentFixture<Candelabra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candelabra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candelabra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
