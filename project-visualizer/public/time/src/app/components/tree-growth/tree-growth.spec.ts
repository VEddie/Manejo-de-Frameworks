import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGrowth } from './tree-growth';

describe('TreeGrowth', () => {
  let component: TreeGrowth;
  let fixture: ComponentFixture<TreeGrowth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeGrowth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeGrowth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
