import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoarbolComponent } from './nuevoarbol.component';

describe('NuevoarbolComponent', () => {
  let component: NuevoarbolComponent;
  let fixture: ComponentFixture<NuevoarbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoarbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoarbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
