import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutView } from './checkout.view';

describe('CheckoutView', () => {
  let component: CheckoutView;
  let fixture: ComponentFixture<CheckoutView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
