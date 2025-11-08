import { TestBed } from '@angular/core/testing';

import { FrrdbackService } from './frrdback.service';

describe('FrrdbackService', () => {
  let service: FrrdbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrrdbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
