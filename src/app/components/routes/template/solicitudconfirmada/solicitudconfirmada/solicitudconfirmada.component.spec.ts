import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudconfirmadaComponent } from './solicitudconfirmada.component';

describe('SolicitudconfirmadaComponent', () => {
  let component: SolicitudconfirmadaComponent;
  let fixture: ComponentFixture<SolicitudconfirmadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudconfirmadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudconfirmadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
