import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilorganizacionComponent } from './perfilorganizacion.component';

describe('PerfilorganizacionComponent', () => {
  let component: PerfilorganizacionComponent;
  let fixture: ComponentFixture<PerfilorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
