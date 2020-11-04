import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeorganizacionComponent } from './homeorganizacion.component';

describe('HomeorganizacionComponent', () => {
  let component: HomeorganizacionComponent;
  let fixture: ComponentFixture<HomeorganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeorganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeorganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
