import { TestBed } from '@angular/core/testing';

import { TestSignalsService } from './test-signals.service';

describe('TestSignalsService', () => {
  let service: TestSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
