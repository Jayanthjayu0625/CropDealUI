import { TestBed } from '@angular/core/testing';

import { RegisterfarmerService } from './registerfarmer.service';

describe('RegisterfarmerService', () => {
  let service: RegisterfarmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterfarmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
