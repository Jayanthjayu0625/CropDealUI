import { TestBed } from '@angular/core/testing';

import { RegisterdealerService } from './registerdealer.service';

describe('RegisterdealerService', () => {
  let service: RegisterdealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterdealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
