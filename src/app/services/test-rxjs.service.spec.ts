import { TestBed } from '@angular/core/testing';

import { TestRxjsService } from './test-rxjs.service';

describe('TestRxjsService', () => {
  let service: TestRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
