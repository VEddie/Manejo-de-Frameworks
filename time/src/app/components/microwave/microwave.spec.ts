import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microwave } from './microwave';

describe('Microwave', () => {
  let component: Microwave;
  let fixture: ComponentFixture<Microwave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Microwave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Microwave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
