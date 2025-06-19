import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCommercials } from './tv-commercials';

describe('TvCommercials', () => {
  let component: TvCommercials;
  let fixture: ComponentFixture<TvCommercials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvCommercials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvCommercials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
