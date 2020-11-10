import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadodearbolesComponent } from './cuidadodearboles.component';

describe('CuidadodearbolesComponent', () => {
  let component: CuidadodearbolesComponent;
  let fixture: ComponentFixture<CuidadodearbolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadodearbolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadodearbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
