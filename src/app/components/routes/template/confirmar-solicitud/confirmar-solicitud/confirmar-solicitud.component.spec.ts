import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarSolicitudComponent } from './confirmar-solicitud.component';

describe('ConfirmarSolicitudComponent', () => {
  let component: ConfirmarSolicitudComponent;
  let fixture: ComponentFixture<ConfirmarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
