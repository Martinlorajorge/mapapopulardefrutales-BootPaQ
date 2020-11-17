import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectoresComponent } from './recolectores.component';

describe('RecolectoresComponent', () => {
  let component: RecolectoresComponent;
  let fixture: ComponentFixture<RecolectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecolectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecolectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
