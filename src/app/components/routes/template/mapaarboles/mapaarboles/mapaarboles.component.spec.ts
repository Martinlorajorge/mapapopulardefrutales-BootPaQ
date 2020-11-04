import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaarbolesComponent } from './mapaarboles.component';

describe('MapaarbolesComponent', () => {
  let component: MapaarbolesComponent;
  let fixture: ComponentFixture<MapaarbolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaarbolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaarbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
