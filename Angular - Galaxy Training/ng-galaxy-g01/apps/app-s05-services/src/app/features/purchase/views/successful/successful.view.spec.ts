import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulView } from './successful.view';

describe('SuccessfulView', () => {
  let component: SuccessfulView;
  let fixture: ComponentFixture<SuccessfulView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
