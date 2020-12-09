import { TestBed } from '@angular/core/testing';

import { TipoOrganizacionService } from './tipo-organizacion.service';

describe('TipoOrganizacionService', () => {
  let service: TipoOrganizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoOrganizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
