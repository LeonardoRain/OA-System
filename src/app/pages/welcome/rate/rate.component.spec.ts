import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateComponent } from './rate.component';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
