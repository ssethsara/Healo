import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseVaccinationComponent } from './nurse-vaccination.component';

describe('NurseVaccinationComponent', () => {
  let component: NurseVaccinationComponent;
  let fixture: ComponentFixture<NurseVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseVaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
