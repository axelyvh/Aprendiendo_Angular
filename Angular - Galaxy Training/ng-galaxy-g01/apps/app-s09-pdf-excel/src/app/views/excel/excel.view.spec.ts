import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelView } from './excel.view';

describe('ExcelView', () => {
  let component: ExcelView;
  let fixture: ComponentFixture<ExcelView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
