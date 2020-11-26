import { TestBed } from '@angular/core/testing';

import { OrganizacionesService } from './organizaciones.service';

describe('OrganizacionesService', () => {
  let service: OrganizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
