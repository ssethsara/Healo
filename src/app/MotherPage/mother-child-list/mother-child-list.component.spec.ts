/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MotherChildListComponent } from './mother-child-list.component';

describe('MotherChildListComponent', () => {
  let component: MotherChildListComponent;
  let fixture: ComponentFixture<MotherChildListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherChildListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
