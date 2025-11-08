import { TestBed } from '@angular/core/testing';

import { FeedbackRetriveService } from './feedback-retrive.service';

describe('FeedbackRetriveService', () => {
  let service: FeedbackRetriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackRetriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
