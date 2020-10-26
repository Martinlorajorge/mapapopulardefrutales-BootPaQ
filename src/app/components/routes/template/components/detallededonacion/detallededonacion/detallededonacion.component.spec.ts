import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallededonacionComponent } from './detallededonacion.component';

describe('DetallededonacionComponent', () => {
  let component: DetallededonacionComponent;
  let fixture: ComponentFixture<DetallededonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallededonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallededonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
