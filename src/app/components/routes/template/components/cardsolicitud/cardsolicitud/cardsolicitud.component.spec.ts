import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsolicitudComponent } from './cardsolicitud.component';

describe('CardsolicitudComponent', () => {
  let component: CardsolicitudComponent;
  let fixture: ComponentFixture<CardsolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
