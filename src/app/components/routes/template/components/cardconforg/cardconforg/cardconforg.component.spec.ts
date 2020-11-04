import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardconforgComponent } from './cardconforg.component';

describe('CardconforgComponent', () => {
  let component: CardconforgComponent;
  let fixture: ComponentFixture<CardconforgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardconforgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardconforgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
