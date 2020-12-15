import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFamiliaComponent } from './user-familia.component';

describe('UserFamiliaComponent', () => {
  let component: UserFamiliaComponent;
  let fixture: ComponentFixture<UserFamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
