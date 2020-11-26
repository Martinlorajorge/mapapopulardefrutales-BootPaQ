import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevorecolectorComponent } from './nuevorecolector.component';

describe('NuevorecolectorComponent', () => {
  let component: NuevorecolectorComponent;
  let fixture: ComponentFixture<NuevorecolectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevorecolectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevorecolectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
