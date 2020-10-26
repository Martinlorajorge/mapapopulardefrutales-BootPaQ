import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissolicitudesComponent } from './missolicitudes.component';

describe('MissolicitudesComponent', () => {
  let component: MissolicitudesComponent;
  let fixture: ComponentFixture<MissolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
