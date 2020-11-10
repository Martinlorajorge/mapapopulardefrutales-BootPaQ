import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleorganizacionComponent } from './detalleorganizacion.component';

describe('DetalleorganizacionComponent', () => {
  let component: DetalleorganizacionComponent;
  let fixture: ComponentFixture<DetalleorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
