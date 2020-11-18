import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaComponent } from './familia.component';

describe('FamiliaComponent', () => {
  let component: FamiliaComponent;
  let fixture: ComponentFixture<FamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
