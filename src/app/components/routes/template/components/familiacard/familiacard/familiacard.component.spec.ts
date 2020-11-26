import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliacardComponent } from './familiacard.component';

describe('FamiliacardComponent', () => {
  let component: FamiliacardComponent;
  let fixture: ComponentFixture<FamiliacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
