import { TestBed } from '@angular/core/testing';

import { ExcelGeneratorService } from './excel-generator.service';

describe('ExcelGeneratorService', () => {
  let service: ExcelGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
