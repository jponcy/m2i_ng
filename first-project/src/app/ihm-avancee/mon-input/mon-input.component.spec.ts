/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonInputComponent } from './mon-input.component';

describe('MonInputComponent', () => {
  let component: MonInputComponent;
  let fixture: ComponentFixture<MonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
