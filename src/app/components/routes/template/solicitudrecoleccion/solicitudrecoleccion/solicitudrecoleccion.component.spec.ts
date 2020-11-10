import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudrecoleccionComponent } from './solicitudrecoleccion.component';

describe('SolicitudrecoleccionComponent', () => {
  let component: SolicitudrecoleccionComponent;
  let fixture: ComponentFixture<SolicitudrecoleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudrecoleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudrecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
