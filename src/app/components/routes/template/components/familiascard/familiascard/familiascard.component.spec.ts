import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliascardComponent } from './familiascard.component';

describe('FamiliascardComponent', () => {
  let component: FamiliascardComponent;
  let fixture: ComponentFixture<FamiliascardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliascardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliascardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
