import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMultipleComponent } from './mapa-multiple.component';

describe('MapaMultipleComponent', () => {
  let component: MapaMultipleComponent;
  let fixture: ComponentFixture<MapaMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
