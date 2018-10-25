import { TestBed } from '@angular/core/testing';

import { GetApodService } from './get-apod.service';

describe('GetApodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetApodService = TestBed.get(GetApodService);
    expect(service).toBeTruthy();
  });
});
