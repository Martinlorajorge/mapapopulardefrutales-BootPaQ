import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSolicitudOrgComponent } from './nueva-solicitud-org.component';

describe('NuevaSolicitudOrgComponent', () => {
  let component: NuevaSolicitudOrgComponent;
  let fixture: ComponentFixture<NuevaSolicitudOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaSolicitudOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSolicitudOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
