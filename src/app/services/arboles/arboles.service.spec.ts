import { TestBed } from '@angular/core/testing';

import { ArbolesService } from './arboles.service';

describe('ArbolesService', () => {
  let service: ArbolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
