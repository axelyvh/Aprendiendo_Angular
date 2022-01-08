import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsView } from './workshops.view';

describe('WorkshopsView', () => {
  let component: WorkshopsView;
  let fixture: ComponentFixture<WorkshopsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
