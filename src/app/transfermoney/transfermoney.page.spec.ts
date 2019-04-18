import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfermoneyPage } from './transfermoney.page';

describe('TransfermoneyPage', () => {
  let component: TransfermoneyPage;
  let fixture: ComponentFixture<TransfermoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfermoneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfermoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
