import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateATMPage } from './activate-atm.page';

describe('ActivateATMPage', () => {
  let component: ActivateATMPage;
  let fixture: ComponentFixture<ActivateATMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateATMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateATMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
