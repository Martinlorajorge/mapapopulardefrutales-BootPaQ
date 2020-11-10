import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsolirecComponent } from './cardsolirec.component';

describe('CardsolirecComponent', () => {
  let component: CardsolirecComponent;
  let fixture: ComponentFixture<CardsolirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsolirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsolirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
