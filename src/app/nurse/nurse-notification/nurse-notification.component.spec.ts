import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseNotificationComponent } from './nurse-notification.component';

describe('NurseNotificationComponent', () => {
  let component: NurseNotificationComponent;
  let fixture: ComponentFixture<NurseNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
