import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApprovalComponent } from './form-approval.component';

describe('FormApprovalComponent', () => {
  let component: FormApprovalComponent;
  let fixture: ComponentFixture<FormApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
