import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilorgcardComponent } from './perfilorgcard.component';

describe('PerfilorgcardComponent', () => {
  let component: PerfilorgcardComponent;
  let fixture: ComponentFixture<PerfilorgcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilorgcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilorgcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
