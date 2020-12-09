import { TestBed } from '@angular/core/testing';

import { RepresentanteService } from './representante.service';

describe('RepresentanteService', () => {
  let service: RepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
