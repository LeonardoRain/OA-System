import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuditComponent } from './form-audit.component';

describe('FormAuditComponent', () => {
  let component: FormAuditComponent;
  let fixture: ComponentFixture<FormAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
