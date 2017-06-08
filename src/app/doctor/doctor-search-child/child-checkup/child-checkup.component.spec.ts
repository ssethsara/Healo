import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCheckupComponent } from './child-checkup.component';

describe('ChildCheckupComponent', () => {
  let component: ChildCheckupComponent;
  let fixture: ComponentFixture<ChildCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
