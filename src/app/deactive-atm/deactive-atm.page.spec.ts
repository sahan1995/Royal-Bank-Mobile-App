import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveAtmPage } from './deactive-atm.page';

describe('DeactiveAtmPage', () => {
  let component: DeactiveAtmPage;
  let fixture: ComponentFixture<DeactiveAtmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveAtmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveAtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
