import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicuentaorganizacionComponent } from './micuentaorganizacion.component';

describe('MicuentaorganizacionComponent', () => {
  let component: MicuentaorganizacionComponent;
  let fixture: ComponentFixture<MicuentaorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicuentaorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicuentaorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
