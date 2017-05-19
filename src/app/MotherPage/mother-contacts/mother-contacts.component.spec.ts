/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotherContactsComponent } from './mother-contacts.component';

describe('MotherContactsComponent', () => {
  let component: MotherContactsComponent;
  let fixture: ComponentFixture<MotherContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
