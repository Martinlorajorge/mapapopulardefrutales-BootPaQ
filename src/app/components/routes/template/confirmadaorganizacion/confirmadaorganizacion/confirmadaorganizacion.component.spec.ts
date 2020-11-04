import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmadaorganizacionComponent } from './confirmadaorganizacion.component';

describe('ConfirmadaorganizacionComponent', () => {
  let component: ConfirmadaorganizacionComponent;
  let fixture: ComponentFixture<ConfirmadaorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmadaorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmadaorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
