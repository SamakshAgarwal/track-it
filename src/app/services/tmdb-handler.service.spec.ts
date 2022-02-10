import { TestBed } from '@angular/core/testing';

import { TmdbHandlerService } from './tmdb-handler.service';

describe('TmdbHandlerService', () => {
  let service: TmdbHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
