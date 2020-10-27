import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrecolectorComponent } from './cardrecolector.component';

describe('CardrecolectorComponent', () => {
  let component: CardrecolectorComponent;
  let fixture: ComponentFixture<CardrecolectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardrecolectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrecolectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
