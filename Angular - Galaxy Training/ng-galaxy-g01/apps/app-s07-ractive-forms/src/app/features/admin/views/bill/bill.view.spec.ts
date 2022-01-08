import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillView } from './bill.view';

describe('BillView', () => {
  let component: BillView;
  let fixture: ComponentFixture<BillView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
