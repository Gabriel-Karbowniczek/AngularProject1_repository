import { TestBed } from '@angular/core/testing';

import { PiesService } from './pies.service';

describe('PiesService', () => {
  let service: PiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
