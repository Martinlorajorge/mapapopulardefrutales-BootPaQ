import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionOrganizacionComponent } from './notificacion-organizacion.component';

describe('NotificacionOrganizacionComponent', () => {
  let component: NotificacionOrganizacionComponent;
  let fixture: ComponentFixture<NotificacionOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
