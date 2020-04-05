import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeProcessingComponent } from './badge-processing.component';

describe('BadgeProcessingComponent', () => {
  let component: BadgeProcessingComponent;
  let fixture: ComponentFixture<BadgeProcessingComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
