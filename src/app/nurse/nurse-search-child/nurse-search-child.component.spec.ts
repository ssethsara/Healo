import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSearchChildComponent } from './nurse-search-child.component';

describe('NurseSearchChildComponent', () => {
  let component: NurseSearchChildComponent;
  let fixture: ComponentFixture<NurseSearchChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseSearchChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSearchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
