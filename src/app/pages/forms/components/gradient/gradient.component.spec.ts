import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GradientComponent } from './gradient.component';

describe('GradientComponent', () => {
  let component: GradientComponent;
  let fixture: ComponentFixture<GradientComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
