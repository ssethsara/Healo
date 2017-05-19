/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MothernevComponent } from './mothernev.component';

describe('MothernevComponent', () => {
  let component: MothernevComponent;
  let fixture: ComponentFixture<MothernevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MothernevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MothernevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
