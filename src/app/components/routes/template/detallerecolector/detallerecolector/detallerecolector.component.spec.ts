import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerecolectorComponent } from './detallerecolector.component';

describe('DetallerecolectorComponent', () => {
  let component: DetallerecolectorComponent;
  let fixture: ComponentFixture<DetallerecolectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallerecolectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallerecolectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
