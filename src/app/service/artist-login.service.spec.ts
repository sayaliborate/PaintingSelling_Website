import { TestBed } from '@angular/core/testing';

import { ArtistLoginService } from './artist-login.service';

describe('ArtistLoginService', () => {
  let service: ArtistLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
