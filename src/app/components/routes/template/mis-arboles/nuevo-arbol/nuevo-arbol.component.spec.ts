import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoArbolComponent } from './nuevo-arbol.component';

describe('NuevoArbolComponent', () => {
  let component: NuevoArbolComponent;
  let fixture: ComponentFixture<NuevoArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoArbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
