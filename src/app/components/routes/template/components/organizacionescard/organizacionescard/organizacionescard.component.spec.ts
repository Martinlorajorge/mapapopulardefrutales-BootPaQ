import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionescardComponent } from './organizacionescard.component';

describe('OrganizacionescardComponent', () => {
  let component: OrganizacionescardComponent;
  let fixture: ComponentFixture<OrganizacionescardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionescardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
