import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfView } from './pdf.view';

describe('PdfView', () => {
  let component: PdfView;
  let fixture: ComponentFixture<PdfView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
