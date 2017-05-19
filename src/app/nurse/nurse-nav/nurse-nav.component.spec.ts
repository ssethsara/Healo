import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseNavComponent } from './nurse-nav.component';

describe('NurseNavComponent', () => {
  let component: NurseNavComponent;
  let fixture: ComponentFixture<NurseNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
