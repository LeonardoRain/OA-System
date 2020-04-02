import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivilegeSelectComponent } from './privilege-select.component';

describe('PrivilegeSelectComponent', () => {
  let component: PrivilegeSelectComponent;
  let fixture: ComponentFixture<PrivilegeSelectComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivilegeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
