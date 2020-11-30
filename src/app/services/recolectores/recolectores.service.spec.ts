import { TestBed } from '@angular/core/testing';

import { RecolectoresService } from './recolectores.service';

describe('RecolectoresService', () => {
  let service: RecolectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecolectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
