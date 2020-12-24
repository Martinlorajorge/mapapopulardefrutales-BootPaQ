import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionFamiliaComponent } from './notificacion-familia.component';

describe('NotificacionFamiliaComponent', () => {
  let component: NotificacionFamiliaComponent;
  let fixture: ComponentFixture<NotificacionFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
