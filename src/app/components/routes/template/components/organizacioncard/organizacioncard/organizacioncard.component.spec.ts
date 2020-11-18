import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacioncardComponent } from './organizacioncard.component';

describe('OrganizacioncardComponent', () => {
  let component: OrganizacioncardComponent;
  let fixture: ComponentFixture<OrganizacioncardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacioncardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
