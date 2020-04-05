import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenderSelectComponent } from './gender-select.component';

describe('GenderSelectComponent', () => {
  let component: GenderSelectComponent;
  let fixture: ComponentFixture<GenderSelectComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
