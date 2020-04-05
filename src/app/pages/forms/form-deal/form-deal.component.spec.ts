import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDealComponent } from './form-deal.component';

describe('FormDealComponent', () => {
  let component: FormDealComponent;
  let fixture: ComponentFixture<FormDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
