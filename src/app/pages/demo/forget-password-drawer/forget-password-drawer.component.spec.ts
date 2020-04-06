import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPasswordDrawerComponent } from './forget-password-drawer.component';

describe('ForgetPasswordDrawerComponent', () => {
  let component: ForgetPasswordDrawerComponent;
  let fixture: ComponentFixture<ForgetPasswordDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
