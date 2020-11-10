import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsolicitudDeOrganizacionComponent } from './cardsolicitud-de-organizacion.component';

describe('CardsolicitudDeOrganizacionComponent', () => {
  let component: CardsolicitudDeOrganizacionComponent;
  let fixture: ComponentFixture<CardsolicitudDeOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsolicitudDeOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsolicitudDeOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
