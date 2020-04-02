import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentSelectComponent } from './department-select.component';

describe('DepartmentSelectComponent', () => {
  let component: DepartmentSelectComponent;
  let fixture: ComponentFixture<DepartmentSelectComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
