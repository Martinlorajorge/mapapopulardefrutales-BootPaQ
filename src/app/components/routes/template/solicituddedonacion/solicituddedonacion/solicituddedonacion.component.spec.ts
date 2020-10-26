import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicituddedonacionComponent } from './solicituddedonacion.component';

describe('SolicituddedonacionComponent', () => {
  let component: SolicituddedonacionComponent;
  let fixture: ComponentFixture<SolicituddedonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicituddedonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicituddedonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
