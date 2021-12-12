import { TestBed } from '@angular/core/testing';

import { ApiMovieDbService } from './api-movie-db.service';

describe('ApiMovieDbService', () => {
  let service: ApiMovieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMovieDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
