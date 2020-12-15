import { TestBed } from '@angular/core/testing';

import { FamiliasService } from './familias.service';

describe('FamiliasService', () => {
  let service: FamiliasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
