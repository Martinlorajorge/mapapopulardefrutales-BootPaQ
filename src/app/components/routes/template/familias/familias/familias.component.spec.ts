import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasComponent } from './familias.component';

describe('FamiliasComponent', () => {
  let component: FamiliasComponent;
  let fixture: ComponentFixture<FamiliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
