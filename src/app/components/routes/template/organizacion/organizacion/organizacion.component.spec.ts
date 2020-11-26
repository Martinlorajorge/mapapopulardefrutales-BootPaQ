import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionComponent } from './organizacion.component';

describe('OrganizacionComponent', () => {
  let component: OrganizacionComponent;
  let fixture: ComponentFixture<OrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
