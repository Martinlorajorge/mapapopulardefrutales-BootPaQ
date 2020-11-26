import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisArbolesComponent } from './mis-arboles.component';

describe('MisArbolesComponent', () => {
  let component: MisArbolesComponent;
  let fixture: ComponentFixture<MisArbolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisArbolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisArbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
