import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidewifeHomeVisitComponent } from './midewife-home-visit.component';

describe('MidewifeHomeVisitComponent', () => {
  let component: MidewifeHomeVisitComponent;
  let fixture: ComponentFixture<MidewifeHomeVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidewifeHomeVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidewifeHomeVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
