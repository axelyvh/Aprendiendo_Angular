import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponsView } from './cupons.view';

describe('CuponsView', () => {
  let component: CuponsView;
  let fixture: ComponentFixture<CuponsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
