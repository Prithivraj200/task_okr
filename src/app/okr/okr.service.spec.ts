import { TestBed } from '@angular/core/testing';

import { OKRService } from './okr.service';

describe('OKRService', () => {
  let service: OKRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OKRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
