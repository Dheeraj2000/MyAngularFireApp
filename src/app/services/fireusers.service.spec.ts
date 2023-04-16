import { TestBed } from '@angular/core/testing';

import { FireusersService } from './fireusers.service';

describe('FireusersService', () => {
  let service: FireusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
