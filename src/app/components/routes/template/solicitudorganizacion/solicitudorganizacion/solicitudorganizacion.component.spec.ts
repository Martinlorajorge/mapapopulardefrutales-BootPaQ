import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudorganizacionComponent } from './solicitudorganizacion.component';

describe('SolicitudorganizacionComponent', () => {
  let component: SolicitudorganizacionComponent;
  let fixture: ComponentFixture<SolicitudorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
