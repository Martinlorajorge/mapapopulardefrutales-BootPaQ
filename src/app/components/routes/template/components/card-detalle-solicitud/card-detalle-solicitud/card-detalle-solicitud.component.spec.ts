import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalleSolicitudComponent } from './card-detalle-solicitud.component';

describe('CardDetalleSolicitudComponent', () => {
  let component: CardDetalleSolicitudComponent;
  let fixture: ComponentFixture<CardDetalleSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetalleSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetalleSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
