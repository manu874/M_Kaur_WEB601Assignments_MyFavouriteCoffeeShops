import { TestBed } from '@angular/core/testing';

import { CoffeshopService } from './coffeshop.service';

describe('CoffeshopService', () => {
  let service: CoffeshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
